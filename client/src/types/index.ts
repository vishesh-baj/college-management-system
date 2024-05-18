import React from "react";

export interface ILogin {
  username: string;
  password: string;
}

export interface IloginSuccess {
  message: string;
  token: string;
}

export interface IReactChildren {
  children: React.ReactNode;
}

export interface IAppState {
  theme: string;
  sidebarToggle: boolean;
}

export interface IHeader {
  title: string;
}
