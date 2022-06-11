package com.nbchen.blog.authority.biz.service.auth;
import com.baomidou.mybatisplus.extension.service.IService;
import com.nbchen.blog.authority.dto.auth.RoleAuthoritySaveDTO;
import com.nbchen.blog.authority.dto.auth.UserRoleSaveDTO;
import com.nbchen.blog.authority.entity.auth.RoleAuthority;
/**
 * 业务接口
 * 角色的资源
 */
public interface RoleAuthorityService extends IService<RoleAuthority> {
    /**
     * 给用户分配角色
     */
    boolean saveUserRole(UserRoleSaveDTO userRole);

    /**
     * 给角色重新分配 权限（资源/菜单）
     */
    boolean saveRoleAuthority(RoleAuthoritySaveDTO roleAuthoritySaveDTO);
}
