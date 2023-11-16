import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { distinctUntilChanged, map, Subscription, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import { Rol } from '../model';

@Directive({
  selector: '[showForRoles]',
})
export class ShowForRolesDirective implements OnInit, OnDestroy {
  @Input('showForRoles') allowedRoles?: Rol[];
  private sub?: Subscription;

  constructor(
    private authService: AuthService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
  ngOnInit(): void {
    this.sub = this.authService.user$
      .pipe(
        map((user) => Boolean(user && this.allowedRoles?.includes(user.rol))),
        distinctUntilChanged(),
        tap((hasRole) =>
          hasRole
            ? this.viewContainerRef.createEmbeddedView(this.templateRef)
            : this.viewContainerRef.clear()
        )
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
