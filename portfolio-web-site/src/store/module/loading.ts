import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { store } from './stores';

@Module({ store, dynamic: true, name: 'loading', namespaced: true })
export class LoadingModule extends VuexModule {
  private _callCount: number = 0;

  public get getIsActive() {
    return this._callCount !== 0;
  }

  @Mutation
  private countUp() {
    this._callCount++;
  }

  @Mutation
  private countDown() {
    this._callCount = Math.max(this._callCount - 1, 0); // -があっても絶対0を返す。
  }

  @Action({ rawError: true })
  public wakeUpLoading(willWakeUp: boolean) {
    if (willWakeUp) {
      this.countUp();
    } else {
      this.countDown();
    }
  }

  @Action({ rawError: true })
  public async loadingAction<T = void>(action: () => Promise<T>): Promise<T> {
    this.wakeUpLoading(true); // loading start

    try {
      const result = await action();
      this.wakeUpLoading(false); // loading false
      return result;
    } catch (e) {
      this.wakeUpLoading(false);
      throw e;
    }
  }
}
