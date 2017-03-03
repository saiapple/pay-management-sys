package com.i1.tde.web.dto;

import org.hibernate.validator.constraints.NotBlank;

/**
 * Created by Sai on 2017/2/28.
 */
public class RuleExecuteInput {
    private String uuid;

    @NotBlank
    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
}
