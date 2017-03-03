package com.i1.tde.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.i1.base.domain.IdentifiableObject;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

/**
 * Created by Sai on 2017/3/2.
 */
public class MaintainDomainObj extends IdentifiableObject {
    private Date createTime;
    private Date updateTime;
    private User createUser;
    private User updateUser;
    private String createUserUuid;
    private String updateUserUuid;

    @NotBlank
    @Column(name = "name")
    public Date getCreateTime() {
        return createTime;
    }

    @CreatedDate
    @Column(name = "create_time")
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @LastModifiedDate
    @Column(name = "update_time")
    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    @JsonIgnore
    @CreatedBy
    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "create_user_uuid")
    public User getCreateUser() {
        return createUser;
    }

    public void setCreateUser(User createUser) {
        this.createUser = createUser;
    }

    @JsonIgnore
    @LastModifiedBy
    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "update_user_uuid")
    public User getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(User updateUser) {
        this.updateUser = updateUser;
    }

    public String getCreateUserUuid() {
        return createUserUuid;
    }

    public void setCreateUserUuid(String createUserUuid) {
        this.createUserUuid = createUserUuid;
    }

    public String getUpdateUserUuid() {
        return updateUserUuid;
    }

    public void setUpdateUserUuid(String updateUserUuid) {
        this.updateUserUuid = updateUserUuid;
    }
}
