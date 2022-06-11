package com.nbchen.blog.zuul.api;

import com.nbchen.blog.authority.dto.auth.ResourceQueryDTO;
import com.nbchen.blog.authority.entity.auth.Resource;
import com.nbchen.blog.core.base.R;
import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "${blog.feign.authority-server:blog-auth-server}",
        fallback = ResourceApiFallback.class)
public interface ResourceApi {
    //获取所有需要鉴权的资源
    @GetMapping("/resource/list")
    public R<List> list();

    //查询当前登录用户拥有的资源权限
    @GetMapping("/resource")
    public R<List<Resource>> visible(ResourceQueryDTO resource);
}
