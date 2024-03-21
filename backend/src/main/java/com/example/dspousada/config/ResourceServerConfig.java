// package com.example.dspousada.config;

// import java.util.Arrays;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.web.servlet.FilterRegistrationBean;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.core.Ordered;
// import org.springframework.core.env.Environment;
// import org.springframework.http.HttpMethod;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
// import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
// import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
// import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.web.filter.CorsFilter;

// @Configuration
// @EnableResourceServer
// public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

// 	@Autowired
// 	private Environment env;
	
// 	@Autowired
// 	private JwtTokenStore tokenStore;
	
// 	private static final String[] PUBLIC = { "/oauth/token", "/h2-console/**" };
	
// 	private static final String[] OPERATOR_OR_ADMIN = { "/products/**", "/categories/**" };
	
// 	private static final String[] ADMIN = { "/users/**" };	
	
// 	@Override
// 	public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
// 		resources.tokenStore(tokenStore);
// 	}

// 	@Override
// 	public void configure(HttpSecurity http) throws Exception {

// 		// H2
// 		if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
// 			http.headers().frameOptions().disable();
// 		}
		
// 		http.authorizeRequests()
// 		.antMatchers(PUBLIC).permitAll()
// 		.antMatchers(HttpMethod.GET, OPERATOR_OR_ADMIN).permitAll()
// 		.antMatchers(OPERATOR_OR_ADMIN).hasAnyRole("OPERATOR", "ADMIN")
// 		.antMatchers(ADMIN).hasRole("ADMIN")
// 		.anyRequest().authenticated();
		
// 		http.cors().configurationSource(corsConfigurationSource());
// 	}
	
// 	@Bean
// 	public CorsConfigurationSource corsConfigurationSource() {
// 		CorsConfiguration corsConfig = new CorsConfiguration();
// 		corsConfig.setAllowedOrigins(Arrays.asList(
// 			"https://sistemadeapousadainteligente.netlify.app",
// 			"http://localhost:3000",
// 			"http://localhost:5173"
// 		));
// 		corsConfig.addAllowedMethod("*");
// 		corsConfig.addAllowedHeader("*");
// 		corsConfig.setAllowCredentials(true);
	
// 		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
// 		source.registerCorsConfiguration("/**", corsConfig);
// 		return source;
// 	}
	 
// 	@Bean
// 	public FilterRegistrationBean<CorsFilter> corsFilter() {
// 	    FilterRegistrationBean<CorsFilter> bean
// 	            = new FilterRegistrationBean<>(new CorsFilter(corsConfigurationSource()));
// 	    bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
// 	    return bean;
// 	}
// }


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(
                        "http://localhost:3000", // Front-end local
                        "https://sistemadeapousadainteligente.netlify.app" // Front-end em produção
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
