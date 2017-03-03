package com.i1.tde.web.dto;

/**
 * Created by WLLY on 2015/9/5..
 */
public class UserLoginOutput {

    private String userName;
    private int type;
    private String userUuid;

    @Deprecated
    public UserLoginOutput(String userName, int type) {
        this.userName = userName;
        this.type = type;
    }

    public UserLoginOutput(String userName, int type, String userUuid) {
        this.userName = userName;
        this.type = type;
        this.userUuid = userUuid;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getUserUuid() {
        return userUuid;
    }

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }
}
