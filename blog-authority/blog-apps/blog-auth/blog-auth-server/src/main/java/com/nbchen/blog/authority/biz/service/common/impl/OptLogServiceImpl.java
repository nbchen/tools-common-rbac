package com.nbchen.blog.authority.biz.service.common.impl;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nbchen.blog.authority.biz.dao.common.OptLogMapper;
import com.nbchen.blog.authority.entity.common.OptLog;
import com.nbchen.blog.dozer.DozerUtils;
import com.nbchen.blog.log.entity.OptLogDTO;
import com.nbchen.blog.authority.biz.service.common.OptLogService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * 业务实现类
 * 操作日志
 */
@Slf4j
@Service
public class OptLogServiceImpl extends ServiceImpl<OptLogMapper, OptLog> implements OptLogService {
    @Autowired
    DozerUtils dozer;

    @Override
    public boolean save(OptLogDTO entity) {
        return super.save(dozer.map(entity, OptLog.class));
    }
}