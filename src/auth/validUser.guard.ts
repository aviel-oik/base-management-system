import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = 'SUPER_SECRET_KEY';

@Injectable()
export class ValidUserGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const req = context.switchToHttp().getRequest();
      const auth = req.headers.authorization;
      if (!auth) throw new UnauthorizedException();

      const token = auth.split(' ')[1];
      try {
        const payload: any = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        return true;
      } 
      catch {
        throw new UnauthorizedException();
      }
    }   
}

