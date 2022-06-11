package com.nbchen.blog.authority.config;

import com.nbchen.blog.databases.datasource.BaseMybatisConfiguration;
import com.nbchen.blog.databases.properties.DatabaseProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;

/**
 * 和mybatis框架相关的配置
 */
@Configuration
@Slf4j
public class AuthorityMybatisAutoConfiguration extends BaseMybatisConfiguration {
    public AuthorityMybatisAutoConfiguration(DatabaseProperties databaseProperties) {
        super(databaseProperties);
    }
}
