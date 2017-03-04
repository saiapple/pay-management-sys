package com.i1.tde.web.dto;

/**
 * Created by Sai on 2017/3/3.
 */
public class UserUpdateInput {
    private String name;
    private String nickName;
    private String role;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
