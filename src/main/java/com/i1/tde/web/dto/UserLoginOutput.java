package com.i1.tde.web.dto;

/**
 * Created by WLLY on 2015/9/5..
 */
public class UserLoginOutput {

    private String userName;
    private int type;
    private String userUuid;
    private String displayName;
    private String role;

    @Deprecated
    public UserLoginOutput(String userName, int type) {
        this.userName = userName;
        this.type = type;
    }

    public UserLoginOutput(String userName, String displayName, int type, String userUuid, String role) {
        this.userName = userName;
        this.type = type;
        this.userUuid = userUuid;
        this.displayName = displayName;
        this.role = role;
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

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
