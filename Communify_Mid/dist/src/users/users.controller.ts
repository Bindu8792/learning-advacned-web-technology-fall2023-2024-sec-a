import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Session, Res, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessageDTO, UserLoginDTO, UserProfile } from './user.dto';
import { UserSessionGuard } from './session.guard';

@Controller('/api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('login')
    @UsePipes(new ValidationPipe())
    
    async login(
        @Session() session,
        @Body() login: UserLoginDTO,
        @Res({ passthrough: true }) res: Response
    ) {
        const user = await this.usersService.login(login);
        try {
            if (user.isLogin) {
                session.userId = user.user.user_id;
                session.username = user.user.user_name;
                return { session, message: "Login Successfull!", success: true, user: user }
            } else {
                return { message: "Username or Password incorrect", success: false }
            }
        } catch {
            return { message: "Username or Password incorrect...", success: false }
        }

    }

    // --------------Search User[start]--------------------\\

    @Get('/all/search/:userId')
    async searchById(@Param('userId') userId: number) {
        return this.usersService.searchById(userId);
    }

    @Get('/all/searchbyusername/:username')
    searchByUsername(@Param('username') username: string) {
        return this.usersService.searchByUsername(username);
    }

    @Get('/friend/search/:userId')
    @UseGuards(UserSessionGuard)
    searchFromFriend(
        @Session() session,
        @Param('userId') userId: number,
    ) {
        return this.usersService.searchFromFriend(session.userId, userId);
    }

    @Get('/conversation/search/:userId')
    @UseGuards(UserSessionGuard)
    searchFromCommunication(
        @Param('userId') userId: number,
        @Session() session,
    ) {
        return this.usersService.searchFromCommunication(session.userId, userId);
    }

    // --------------Search User[end]--------------------\\



    // --------------Draft Message[start]--------------------\\

    @Post('/conversation/draft')
    @UseGuards(UserSessionGuard)
    createDraft(
        @Body() message: MessageDTO,
        @Session() session,
    ) {
        return this.usersService.createDraft(session.userId, message);
    }

    @Get('/conversation/draft/:reciever')
    @UseGuards(UserSessionGuard)
    getDraft(
        @Param('reciever') reciever: string,
        @Session() session,
    ) {
        return this.usersService.getDraft(session.userId, reciever);
    }

    // --------------Draft Message[end]--------------------\\



    // --------------Notification[start]--------------------\\

    @Get('/notifications')
    @UseGuards(UserSessionGuard)
    allNotifications(@Session() session) {
        return this.usersService.allNotifications(session.userId)
    }

    // --------------Notification[end]--------------------\\



    // --------------Friends[Start]--------------------\\

    @Get('/friends')
    @UseGuards(UserSessionGuard)
    allFriends(@Session() session) {
        return this.usersService.allFriends(session.userId);
    }

    @Post('/friend/send')
    @UseGuards(UserSessionGuard)
    sendFriendRequest(
        @Body() sentUser: { user: number },
        @Session() session
    ) {
        return this.usersService.sendFriendRequest(session.userId, sentUser);
    }

    @Put('/friend/accept')
    @UseGuards(UserSessionGuard)
    acceptFriendRequest(
        @Body() sentUser: { user: number },
        @Session() session
    ) {
        return this.usersService.acceptFriendRequest(session.userId, sentUser);
    }

    @Patch('/friend/reject/')
    @UseGuards(UserSessionGuard)
    rejectFriendRequest(
        @Body() sentUser: { user: number },
        @Session() session
    ) {
        return this.usersService.rejectFriendRequest(session.userId, sentUser);
    }

    @Delete('/friend/unfriend')
    unfriend(
        @Body() sentUser: { user: number },
        @Session() session
    ) {
        return this.usersService.unfriend(session.userId, sentUser);
    }

    // --------------Friends[end]--------------------\\
}
