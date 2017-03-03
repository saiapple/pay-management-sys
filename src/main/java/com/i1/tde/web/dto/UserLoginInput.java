package com.i1.tde.web.dto;

/**
 * Created by WLLY on 2015/7/22.
 */
public class UserLoginInput {
    private String userName;
    private String password;

    public UserLoginInput() {
    }

    public UserLoginInput(String userName, String password) {
        this.password = password;
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
