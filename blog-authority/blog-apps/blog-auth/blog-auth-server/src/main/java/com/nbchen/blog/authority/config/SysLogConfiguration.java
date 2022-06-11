package com.nbchen.blog.authority.config;

import com.nbchen.blog.authority.biz.service.common.OptLogService;
import com.nbchen.blog.log.entity.OptLogDTO;
import com.nbchen.blog.log.event.SysLogListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import java.util.function.Consumer;

/**
 * 系统操作日志配置类
 */
@Configuration
@EnableAsync
public class SysLogConfiguration {
    //创建日志记录监听器对象
    @Bean
    public SysLogListener sysLogListener(OptLogService optLogService){
        Consumer<OptLogDTO> consumer = (optLog) -> optLogService.save(optLog);
        return new SysLogListener(consumer);
    }
}