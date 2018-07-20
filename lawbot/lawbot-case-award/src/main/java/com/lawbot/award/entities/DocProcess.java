/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lawbot.award.entities;

import java.util.List;

/**
 *
 * @author 陈光曦
 */
public class DocProcess {

    private final String inRoutineDocUrl;
    private final String inApplicationDocUrl;
    private final List inAppEvidenceDocUrlList;
    private final String inRespondDocUrl;
    private final List inResEvidenceDocUrlList;
    private final String outAwardDocUrl;

    public DocProcess(String inRoutineDocUrl,
            String inApplicationDocUrl,
            List inAppEvidenceDocUrlList,
            String inRespondDocUrl,
            List inResEvidenceDocUrlList,
            String outAwardDocUrl) {
        this.inRoutineDocUrl = inRoutineDocUrl;
        this.inApplicationDocUrl = inApplicationDocUrl;
        this.inAppEvidenceDocUrlList = inAppEvidenceDocUrlList;
        this.inRespondDocUrl = inRespondDocUrl;
        this.inResEvidenceDocUrlList = inResEvidenceDocUrlList;
        this.outAwardDocUrl = outAwardDocUrl;
    }

    public String getInApplicationDocUrl() {
        return inApplicationDocUrl;
    }

    public String getInRoutineDocUrl() {
        return inRoutineDocUrl;
    }

    public String getInRespondDocUrl() {
        return inRespondDocUrl;
    }

    public String getOutAwardDocUrl() {
        return outAwardDocUrl;
    }

    public List getInAppEvidenceDocUrlList() {
        return inAppEvidenceDocUrlList;
    }

    public List getInResEvidenceDocUrlList() {
        return inResEvidenceDocUrlList;
    }

}
