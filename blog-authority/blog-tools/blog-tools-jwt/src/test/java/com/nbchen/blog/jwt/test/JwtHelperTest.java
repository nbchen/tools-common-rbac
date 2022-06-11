package com.nbchen.blog.jwt.test;


import com.nbchen.blog.jwt.utils.JwtHelper;
import com.nbchen.blog.jwt.utils.JwtUserInfo;
import com.nbchen.blog.jwt.utils.Token;

/**
 * jwt 生成和解析 测试类
 *
 */
public class JwtHelperTest {

    /**
     * 验证自己生成的 公钥私钥能否 成功生成token 解析token
     *
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        JwtUserInfo jwtInfo = new JwtUserInfo(1L, "nbchen", "蹒跚学步架构师", 1L, 1L);
        int expire = 7200;

        //生成Token  注意： 确保该模块 blog-tools-jwt-starter/src/main/resources 目录下已经有了私钥
        Token token = JwtHelper.generateUserToken(jwtInfo, "pri.key", expire);
        System.out.println(token);

        //解析Token  注意： 确保该模块 blog-tools-jwt-starter/src/main/resources 目录下已经有了公钥
        JwtUserInfo jwtFromToken = JwtHelper.getJwtFromToken(token.getToken(), "pub.key");
        System.out.println(jwtFromToken);

    }

}
