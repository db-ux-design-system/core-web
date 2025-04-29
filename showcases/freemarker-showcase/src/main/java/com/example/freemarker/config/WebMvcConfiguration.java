package com.example.freemarker.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;


@EnableWebMvc
@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

	protected static final Path DB_UX_MODULES = Path.of(System.getProperty("user.dir"), "node_modules", "@db-ux").normalize();

	protected static final Path FREEMARKER_MODULES = Path.of(System.getProperty("user.dir"), "output", "freemarker").normalize();


	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/@db-ux/**")
			.addResourceLocations(DB_UX_MODULES.toUri() + "/");
		registry.addResourceHandler("/freemarker/**")
			.addResourceLocations(FREEMARKER_MODULES.toUri() + "/");
	}
}

