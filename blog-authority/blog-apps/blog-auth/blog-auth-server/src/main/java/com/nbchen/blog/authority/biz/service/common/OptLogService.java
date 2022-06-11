package com.nbchen.blog.authority.biz.service.common;
import com.baomidou.mybatisplus.extension.service.IService;
import com.nbchen.blog.authority.entity.common.OptLog;
import com.nbchen.blog.log.entity.OptLogDTO;
/**
 * 业务接口
 * 操作日志
 */
public interface OptLogService extends IService<OptLog> {
    /**
     * 保存日志
     */
    boolean save(OptLogDTO entity);
}
