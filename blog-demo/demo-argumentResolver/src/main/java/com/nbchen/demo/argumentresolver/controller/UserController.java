package com.nbchen.demo.argumentresolver.controller;

import com.nbchen.demo.argumentresolver.annotation.CurrentUser;
import com.nbchen.demo.argumentresolver.entity.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class UserController {
    //获取当前系统登录用户
    @GetMapping("/getCurrentUser")
    public String getCurrentUser(User user) {
        String name = user.getUsername();
        System.out.println("UserController getCurrentUser方法...");
        return user.toString();
    }
    //获取当前系统登录用户
    @GetMapping("/getCurrentUser2")
    //注意：需要在User参数前加入CurrentUser注解
    public String getCurrentUser2(@CurrentUser User user) {
        String name = user.getUsername();
        System.out.println("UserController getCurrentUser方法...");
        return user.toString();
    }
}