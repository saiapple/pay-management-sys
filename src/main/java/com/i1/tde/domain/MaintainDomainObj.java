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
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Sai on 2017/3/2.
 */
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class MaintainDomainObj extends IdentifiableObject {
    private Date createTime;
    private Date updateTime;
    private User createUser;
    private User updateUser;
    private String createUserUuid;
    private String updateUserUuid;

    @CreatedDate
    @Column(name = "create_time")
    public Date getCreateTime() {
        return createTime;
    }

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

    @CreatedBy
    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "create_user_uuid")
    public User getCreateUser() {
        return createUser;
    }

    public void setCreateUser(User createUser) {
        this.createUser = createUser;
        if (this.createUser != null) {
            this.createUserUuid = this.createUser.getUuid();
        }
    }

    @LastModifiedBy
    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "update_user_uuid")
    public User getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(User updateUser) {
        this.updateUser = updateUser;
        if (this.updateUser != null) {
            this.updateUserUuid = this.updateUser.getUuid();
        }
    }

    @Transient
    public String getCreateUserUuid() {
        return createUserUuid;
    }

    public void setCreateUserUuid(String createUserUuid) {
        this.createUserUuid = createUserUuid;
    }

    @Transient
    public String getUpdateUserUuid() {
        return updateUserUuid;
    }

    public void setUpdateUserUuid(String updateUserUuid) {
        this.updateUserUuid = updateUserUuid;
    }
}
