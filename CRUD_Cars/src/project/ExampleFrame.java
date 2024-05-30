package project;

import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.swing.JFrame;

public class ExampleFrame extends JFrame {

    public ExampleFrame() throws IOException {
        
        super.setTitle("  Vehicle Registration");
        super.setIconImage(ImageIO.read(new File("src/images/FrameIcon.png")));
        super.setSize(480, 623);
        super.setResizable(false);
        super.setLocationRelativeTo(null);
        super.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
    }
    
}
