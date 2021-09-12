import { Injectable } from '@angular/core';

let config_KEY_name = "config";

@Injectable()
export class ConfigProvider {

  public config = {
    ShowSlide: false,
    Name: "",
    Username: "",
  }

  constructor() {

  }

  //Recupera Dados (Localstorage)
  getConfigData (): any{

    return localStorage.getItem(config_KEY_name);

  }

  //Grava Dados (Localstorage)
  setConfigData(ShowSlide?:boolean, Name?: string, Username?: string,){
    let config = {
      ShowSlide: false,
      Name: "",
      Username: "",
    };

    if(ShowSlide){
      config.ShowSlide = ShowSlide;
    }

    if(Name){
      config.Name = Name;
    }

    if(ShowSlide){
      config.Username = Username;
    }

    localStorage.setItem(config_KEY_name,JSON.stringify(config))
  }

}
