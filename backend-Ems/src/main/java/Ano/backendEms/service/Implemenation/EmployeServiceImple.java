package Ano.backendEms.service.Implemenation;

import Ano.backendEms.dto.EmployeDto;
import Ano.backendEms.entity.Employe;
import Ano.backendEms.exception.ResourceNotFoundException;
import Ano.backendEms.mapper.EmployeMapper;
import Ano.backendEms.repository.EmployeRepository;
import Ano.backendEms.service.EmployeService;
import lombok.AllArgsConstructor;
import java.util.List;
import java.util.stream.Collectors;

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
                .orElseThrow(()-> new ResourceNotFoundException("Employe not Exits with give Id: " + emloyedId));
        return EmployeMapper.mapToEmployeDto(employe);
    }

    @Override
    public List<EmployeDto> getallemloyes() {
     List<Employe> employees =   employeRepository.findAll();
        return employees.stream().map((employe -> EmployeMapper.mapToEmployeDto(employe)))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeDto updateembloy(Long employeId, EmployeDto updateEmployeDetalis) {
     Employe employe =   employeRepository.findById(employeId).orElseThrow(
                () -> new ResourceNotFoundException("Employe not Exits with give Id: " + employeId)
        );

     employe.setFirstname(updateEmployeDetalis.getFirstname());
     employe.setLastname(updateEmployeDetalis.getLastname());
     employe.setEmail(updateEmployeDetalis.getEmail());
     employe.setPhone(updateEmployeDetalis.getPhone());

   Employe upadteem =  employeRepository.save(employe);

        return EmployeMapper.mapToEmployeDto(upadteem);
    }
}
