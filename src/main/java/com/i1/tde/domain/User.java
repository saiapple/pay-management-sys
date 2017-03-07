package com.i1.tde.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.i1.base.domain.IdentifiableObject;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Sai on 2017/3/2.
 */
@Entity
@Table(name = "user")
@EntityListeners(AuditingEntityListener.class)
public class User extends IdentifiableObject {
    public static final String ROLE_1 = "1";
    public static final String ROLE_2 = "2";

    private String name;
    private String nickName;
    @JsonIgnore
    private String password;
    @JsonIgnore
    public static String salt = "IONE-AWESOME";
    private Date createTime;
    private Date updateTime;
    private String createUserUuid;
    private String updateUserUuid;
    private String role;

//    private String userUuid;

    @NotBlank
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @NotBlank
    @Column(name = "nick_name")
    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    @NotBlank
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public static String getSalt() {
        return salt;
    }

    public static void setSalt(String salt) {
        User.salt = salt;
    }

    //@NotBlank
    @CreatedDate
    @Column(name = "create_time")
    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    //@NotBlank
    @LastModifiedDate
    @Column(name = "update_time")
    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    //@NotBlank
    @Column(name = "create_user_uuid")
    public String getCreateUserUuid() {
        return createUserUuid;
    }

    public void setCreateUserUuid(String createUserUuid) {
        this.createUserUuid = createUserUuid;
    }

    //@NotBlank
    @Column(name = "update_user_uuid")
    public String getUpdateUserUuid() {
        return updateUserUuid;
    }

    public void setUpdateUserUuid(String updateUserUuid) {
        this.updateUserUuid = updateUserUuid;
    }

    //@NotBlank
    @Column(name = "role")
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


//    public String getUserUuid() {
//        return userUuid;
//    }
//
//    public void setUserUuid(String userUuid) {
//        this.userUuid = userUuid;
//    }
}
