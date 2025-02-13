package in.goducky.services;

public class CompilationOutput {
    public boolean success;
    public String message;
    public CompilationOutput(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}
