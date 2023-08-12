import com.google.gson.JsonObject;

public class SelectTest {
    public static void main(String[] args) throws Exception {
        JsonObject data = new JsonObject();
        String postgres = "jdbc:postgresql://devkit.nuvolaris.io/address?user=ubuntu&password=p4ssWord";
        data.addProperty("postgres", postgres);
        System.out.println(Main.main(data));
    }
}
