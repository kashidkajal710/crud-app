import { CanDeactivateFn } from '@angular/router';

export const productguardGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
confirm("we want to continue")
  return true;
};
