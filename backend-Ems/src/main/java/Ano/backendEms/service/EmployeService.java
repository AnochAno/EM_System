package Ano.backendEms.service;

import Ano.backendEms.dto.EmployeDto;

public interface EmployeService {
    EmployeDto createEmploye(EmployeDto employeDto);

    EmployeDto getEmployebyid(Long emloyedId);

}
