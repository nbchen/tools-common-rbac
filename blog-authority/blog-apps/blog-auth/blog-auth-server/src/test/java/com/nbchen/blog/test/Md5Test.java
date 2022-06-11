package com.nbchen.blog.test;

import org.apache.commons.codec.digest.DigestUtils;

/**
 * @description:
 * @author: nbchen
 * @date: 2022/6/9
 */
public class Md5Test {
    public static void main(String[] args) {
        String md5Hex = DigestUtils.md5Hex("blog123");
        System.out.println("md5Hex = " + md5Hex);
    }
}
