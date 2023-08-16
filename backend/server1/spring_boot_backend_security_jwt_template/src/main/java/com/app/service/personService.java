package com.app.service;

import com.app.dto.ApiResponse;
import com.app.entity.Person;

public interface personService 
{
  ApiResponse addNewPeson(Person p);
}
