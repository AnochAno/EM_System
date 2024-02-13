package Ano.backendEms.service.Implemenation;

import Ano.backendEms.dto.EmployeDto;
import Ano.backendEms.entity.Employe;
import Ano.backendEms.exception.ResourceNotFoundException;
import Ano.backendEms.mapper.EmployeMapper;
import Ano.backendEms.repository.EmployeRepository;
import Ano.backendEms.service.EmployeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeServiceImple implements EmployeService {
    private EmployeRepository employeRepository;
    @Override
    public EmployeDto createEmploye(EmployeDto employeDto) {
        Employe employe = EmployeMapper.mapToEmploye(employeDto);
       Employe SaveEmploye =  employeRepository.save(employe);
        return EmployeMapper.mapToEmployeDto(SaveEmploye);
    }

    @Override
    public EmployeDto getEmployebyid(Long emloyedId) {
      Employe employe =  employeRepository.findById(emloyedId)
                .orElseThrow(()-> new ResourceNotFoundException("Employe not Exits with give Id:" + emloyedId));
        return EmployeMapper.mapToEmployeDto(employe);
    }
}
