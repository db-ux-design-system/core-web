package com.example.freemarker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class HelloWorldController {
	@GetMapping("/")
	public ModelAndView index() {
		ModelAndView modelAndView = new ModelAndView("index");
		modelAndView.addObject("title", "Freemarker");
		return modelAndView;
	}

	@GetMapping("/test")
	public ModelAndView test() {
		ModelAndView modelAndView = new ModelAndView("routes/test");
		modelAndView.addObject("title", "Freemarker");
		return modelAndView;
	}


}
