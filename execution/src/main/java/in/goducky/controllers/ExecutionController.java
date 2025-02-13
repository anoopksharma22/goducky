package in.goducky.controllers;

import in.goducky.services.CodeExecutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import in.goducky.dtos.ExecutionResponse;

@RestController
@CrossOrigin
@RequestMapping("/api/execution")
public class ExecutionController {

    CodeExecutor codeExecutor;

    public ExecutionController(CodeExecutor codeExecutor) {
        this.codeExecutor = codeExecutor;
    }

    @PostMapping("/execute")
    public ResponseEntity<ExecutionResponse> execute(@RequestBody String javaCode) {
        ExecutionResponse output = codeExecutor.execute(javaCode);
        return new ResponseEntity<>(new ExecutionResponse(output.output(),output.error()), HttpStatus.OK);
    }
}
