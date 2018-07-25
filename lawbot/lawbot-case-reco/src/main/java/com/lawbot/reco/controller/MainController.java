package com.lawbot.reco.controller;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.lawbot.core.entity.result.Result;
import com.lawbot.core.entity.result.Result.ResultData;
import com.lawbot.core.entity.result.ResultCode;
import com.lawbot.reco.service.RuleService;

/**
 * 
 * @author Cloud Lau
 *
 */
@RestController
@RequestMapping("/")
public class MainController {
	
	private Logger logger = LoggerFactory.getLogger(MainController.class);
	
	@Autowired
	private RuleService ruleService;

	/**
	 * 
	 * @param params
	 * @return
	 */
	@PostMapping("case-keys")
	public Result calcFactor(@RequestBody(required = true) Map<String, Object> params){
		List<String> factors;
		try {
			factors = ruleService.getCaseKeysOnCached(params);
			return Result.success(new Result.ResultData("caseKeys", factors));
		} catch (InterruptedException | ExecutionException e) {
			logger.error(e.getMessage());
			return Result.error(ResultCode.UNKNOW_ERROR);
		}

	}
	
	@GetMapping("case-laws/{caseId}")
	public Result getCaseLaws(@PathVariable(required = true) long caseId){
		return Result.success(new Result.ResultData("caseLaws", ruleService.findCaseLawByCaseId(caseId)));
	}
	
	@PostMapping("case-rules")
	public Result getCaseRules(@RequestBody(required = true) Map<String,Object> params){
		if(params.containsKey("keys") && params.get("keys") instanceof List){
			return Result.success(new Result.ResultData("caseRules",ruleService.findWithLawByKeys((List)params.get("keys"))));
		}
		return Result.error(ResultCode.REQUEST_PARAMS_ERROR);
	}
	
	@PostMapping("case-same")
	public Object getSameCases(@RequestBody(required = true) Map<String,Object> params){
		if(params.containsKey("keys") && params.get("keys") instanceof List){
			List<String> keys = (List<String>) params.get("keys");
			JSONObject sameCases;
			try {
				sameCases = ruleService.findSameCasesOnCached(keys);
				return Result.success(new Result.ResultData("sameCases" ,sameCases));
			} catch (InterruptedException | ExecutionException e) {
				logger.error(e.getMessage());
				return Result.error(ResultCode.UNKNOW_ERROR);
			}
		}
		return Result.error(ResultCode.REQUEST_PARAMS_ERROR);
		
	}
	
	/*@GetMapping("case-detail/{caseId}")
	public Object getCaseDetail(@PathVariable(required = true) String caseId){
		return Result.success(new Result.ResultData("caseDetail",aiService.getCaseDetail(caseId)));
	}*/
	
	
}
