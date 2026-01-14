import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

const JWT_SECRET = 'SUPER_SECRET_KEY';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException();

    const match = await bcrypt.compare(password, user.dataValues.password);
    if (!match) throw new UnauthorizedException();

    const payload = {
      userId: user.id,
      role: user.dataValues.role, // soldier | commander
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    return { token };
  }

  verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET);
  }
}
