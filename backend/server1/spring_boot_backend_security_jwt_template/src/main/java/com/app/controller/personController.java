package com.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/person")
public class personController {
    @GetMapping("/hello")
	public String getDetails()
	{
		return "sukumar";
	}
}
