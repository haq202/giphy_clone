import { NavbarType } from './layout.model';

export interface IHttpApiResponse<R> {
  data: R;
}

// export interface IRefreshTokenResponse {}

// export interface IPageRequestParams {}

// export interface IExportFileCommon {}

export interface IGif {
  title: string;
  url: string;
  createdBy: string;
  createdAt: Date;
  type: NavbarType;
}
