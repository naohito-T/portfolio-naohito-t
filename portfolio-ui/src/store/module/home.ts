import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { store } from './stores';
import { ProjectDetail, Projects } from '@/lib/api/types/response/home';
import { api } from '@/lib/api';

@Module({ store, dynamic: true, name: 'home', namespaced: true })
export class HomeModule extends VuexModule {
  /**
   * プロジェクト詳細 : works/_slug
   * プロジェクト    : works
   * ↑ それは型定義一緒でよいのでは? いや詳細のが情報多いからいいか
   */
  private _project: ProjectDetail | null = null;
  private _projects: Projects[] | null = null;

  public get project(): ProjectDetail | null {
    return this._project;
  }

  public get projectList(): Projects[] | null {
    return this._projects;
  }

  @Mutation
  public setProject(product: ProjectDetail) {
    this._project = product;
  }

  @Mutation
  public setProjects(products: Projects[]) {
    this._projects = products;
  }

  @Action({ rawError: true })
  public async fetchProject(collection: string, docId: string) {
    return await api.home.fetchProjectDetail(collection, docId).then((r) => {
      this.setProject(r);
    });
  }

  @Action({ rawError: true })
  public async fetchProjectList() {}

  /** ここでやる必要があるのか？axiosで定義すればいいのでは */
  // private errorHandler(e: AxiosError): void {
  //   if (e.response) {
  //     const res
  //   }
  // }
}
