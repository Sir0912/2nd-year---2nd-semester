<?phpheader("content- type application/jspn");
require(".../DB.php");

$db = new DB();
$conn = $db->$_COOKIE

$input = file_get_contents("php://input");
$user = json_decode