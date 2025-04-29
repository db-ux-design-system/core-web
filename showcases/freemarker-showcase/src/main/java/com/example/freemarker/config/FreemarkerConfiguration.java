package com.example.freemarker.config;

import freemarker.cache.FileTemplateLoader;
import freemarker.cache.MultiTemplateLoader;
import freemarker.cache.TemplateLoader;
import freemarker.template.TemplateModelException;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;


@Configuration
public class FreemarkerConfiguration {

	protected static final Path OUTPUT_PATH = Path.of(System.getProperty("user.dir"), "output", "freemarker").normalize();

	protected static final Path TEMPLATE_PATH = Path.of(System.getProperty("user.dir"), "showcases", "freemarker-showcase", "src", "main", "resources", "templates").normalize();

	private final freemarker.template.Configuration configuration;

	public FreemarkerConfiguration(freemarker.template.Configuration configuration) {
		this.configuration = configuration;
	}

	@PostConstruct
	public void configuration() throws TemplateModelException, IOException {
		// add globe variable
		this.configuration.setSharedVariable("app", "Spring Boot");

		FileTemplateLoader ftl1 = new FileTemplateLoader(TEMPLATE_PATH.toFile());
		FileTemplateLoader ftl2 = new FileTemplateLoader(OUTPUT_PATH.toFile());

		MultiTemplateLoader mtl = new MultiTemplateLoader(new TemplateLoader[]{ftl1, ftl2});

		this.configuration.setTemplateLoader(mtl);
	}
}

