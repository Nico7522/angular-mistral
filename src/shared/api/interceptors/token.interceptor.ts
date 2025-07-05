import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    setHeaders: { Authorization: `Bearer ${environment.API_KEY}` },
  });
  return next(newReq);
};
