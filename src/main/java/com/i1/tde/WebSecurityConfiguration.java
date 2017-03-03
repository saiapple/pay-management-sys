package com.i1.tde;

import com.i1.tde.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.authentication.dao.ReflectionSaltSource;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@EnableWebSecurity
@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final String[] permitUrls = new String[]{
            "/bower_components/**",
            "/app/**",
            "/minify/**",
            "/src/**",
            "/demo/**",
            "/favicon.ico",
            "/auth/login",
            "/auth/logout",
            "/login",
            "/",
            "/sql"
    };
    @Autowired
    private UserService userService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().cacheControl().disable();
        http.authorizeRequests()
                .antMatchers(permitUrls).permitAll()
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                .anyRequest().authenticated()
                .and().httpBasic()
                .and().csrf().disable();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setPasswordEncoder(new ShaPasswordEncoder());
        authProvider.setUserDetailsService(userService);

        ReflectionSaltSource saltSource = new ReflectionSaltSource();
        saltSource.setUserPropertyToUse("salt");
        authProvider.setSaltSource(saltSource);
        auth.authenticationProvider(authProvider);
    }

    @Bean
    public WebMvcConfigurerAdapter forwardMap() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                registry.addViewController("/").setViewName("forward:/app/index.html");
                registry.addViewController("/login").setViewName("forward:/app/login.html");
                registry.addViewController("/sql").setViewName("forward:/app/rule.html");
            }
        };
    }

    @Bean
    public ShaPasswordEncoder getEncoder() {
        return new ShaPasswordEncoder();
    }

}
