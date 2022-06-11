package com.nbchen.blog.zuul.api;

import com.nbchen.blog.authority.dto.auth.ResourceQueryDTO;
import com.nbchen.blog.authority.entity.auth.Resource;
import com.nbchen.blog.core.base.R;
import java.util.List;
import org.springframework.stereotype.Component;
/**
 * 资源API熔断
 */
@Component
public class ResourceApiFallback implements ResourceApi {
    @Override
    public R<List> list() {
        return null;
    }

    @Override
    public R<List<Resource>> visible(ResourceQueryDTO resource) {
        return null;
    }
}
