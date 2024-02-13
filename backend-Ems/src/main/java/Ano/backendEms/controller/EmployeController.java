package Ano.backendEms.controller;

import Ano.backendEms.dto.EmployeDto;
import Ano.backendEms.service.EmployeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@AllArgsConstructor
@RequestMapping("/api/employes")
public class EmployeController {
    private EmployeService employeService;

    //create add Employe API

    @PostMapping
    public ResponseEntity<EmployeDto> createEmploye(@RequestBody EmployeDto employeDto){
     EmployeDto SaveEmploye =   employeService.createEmploye(employeDto);
     return new ResponseEntity<>(SaveEmploye, HttpStatus.CREATED);
    }



}
