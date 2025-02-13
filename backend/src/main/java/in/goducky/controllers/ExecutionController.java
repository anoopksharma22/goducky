package in.goducky.controllers;

import in.goducky.services.CodeExecutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.goducky.dtos.ExecutionResponse;

@RestController
@RequestMapping("/api/execution")
public class ExecutionController {
    @Autowired
    CodeExecutor codeExecutor;

    @PostMapping("/execute")
    public ResponseEntity<ExecutionResponse> execute(@RequestBody String javaCode) {
        ExecutionResponse output = codeExecutor.execute(javaCode);
        return new ResponseEntity<>(new ExecutionResponse(output.output(),output.error()), HttpStatus.OK);
    }
}
