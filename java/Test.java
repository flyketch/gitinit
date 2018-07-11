import java.util.*;
class Test {
    public static void main(String[] args) {
        String tt = "Hello";
        if (tt == "Hellos") {
            System.out.println("true in if");
        }else {
            System.out.println("false in if");
        }

        System.out.println("out side if");
        BB bb = new BB();
        System.out.println(bb.getResults(1));
    }

    public void testOne(){
        System.out.println("test one");
    }
}

class BB {
    public String getResults(Integer s){
        if (s == 1){
            return "yes";
        }

        if (s == 2){
            return "66";
        }

        return "no";
    }
}

