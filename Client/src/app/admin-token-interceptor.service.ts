import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';
@Injectable()
export class AdminTokenInterceptorService  implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('AdminAuthorization', 'bearer ' + authService.getTokenAdmin())
        // setHeaders:{
        //   Authorization:'Bearer xx.yy.zz'
        // }AdminTokenInterceptorService
      }
    )
    return next.handle(tokenizedReq)
  }

}