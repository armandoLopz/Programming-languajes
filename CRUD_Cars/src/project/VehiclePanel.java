package project;

import java.awt.Color;
import java.awt.Font;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JColorChooser;
import javax.swing.JComboBox;
import javax.swing.JFileChooser;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextField;
import javax.swing.border.BevelBorder;
import javax.swing.border.LineBorder;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import javax.swing.filechooser.FileNameExtensionFilter;

public class VehiclePanel extends JPanel {

    final private ButtonAction ACTION_BUTTON;
    final private ButtonGroup BG;
    final private JButton COLOR_B, PHOTO_B, BACK_B, SEND_B;
    final private JComboBox BRAND_CB, MODEL_CB;
    final private JLabel PANEL_LB, PLATE_LB, YEAR_LB, BRAND_LB, MODEL_LB, COLOR_LB, ACTION_LB, PHOTO_LB;
    final private JRadioButton REGISTER_RB, RENT_RB, SELL_RB;
    final private JTextField PLATE_TF, YEAR_TF;
    private Color colorVehicle;
    private File imageVehicle;
    
    public VehiclePanel(Frame frame) {
    
        super.setBackground(Color.WHITE);
        super.setLayout(null);
        
        imageVehicle = null;
        colorVehicle = null;
        
        PANEL_LB = new JLabel("VEHICLE REGISTRATION");
        PANEL_LB.setFont(new Font("Arial", Font.BOLD, 23));
        PANEL_LB.setBounds(97, 20, 280, 20);
        PANEL_LB.setForeground(new Color(56, 56, 56));
        super.add(PANEL_LB);
        
        PLATE_LB = new JLabel("Plate:");
        PLATE_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        PLATE_LB.setForeground(Color.BLACK);
        PLATE_LB.setBounds(23, 80, 50, 15);
        super.add(PLATE_LB);    
        
        PLATE_TF = new JTextField();
        PLATE_TF.setBounds(23, 105, 195, 28);
        PLATE_TF.setBackground(new Color(246, 246, 246));
        PLATE_TF.setBorder(new LineBorder(Color.BLACK));
        PLATE_TF.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        super.add(PLATE_TF);
        
        YEAR_LB = new JLabel("Year Of Vehicle:");
        YEAR_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        YEAR_LB.setForeground(Color.BLACK);
        YEAR_LB.setBounds(245, 80, 130, 15);
        super.add(YEAR_LB);
        
        YEAR_TF = new JTextField();
        YEAR_TF.setBounds(245, 105, 195, 28);
        YEAR_TF.setBackground(new Color(246, 246, 246));
        YEAR_TF.setBorder(new LineBorder(Color.BLACK));
        YEAR_TF.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        super.add(YEAR_TF);
        
        BRAND_LB = new JLabel("Brand:");
        BRAND_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        BRAND_LB.setForeground(Color.BLACK);
        BRAND_LB.setBounds(23, 158, 80, 15);
        super.add(BRAND_LB);
        
        BRAND_CB = new JComboBox();
        BRAND_CB.addItem("Chevrolet");
        BRAND_CB.setSelectedItem(null);
        BRAND_CB.setBackground(new Color(246, 246, 246));
        BRAND_CB.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 17));
        BRAND_CB.setBounds(23, 183, 195, 28);
        BRAND_CB.setFocusable(false);
        super.add(BRAND_CB);
        
        MODEL_LB = new JLabel("Model:");
        MODEL_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        MODEL_LB.setForeground(Color.BLACK);
        MODEL_LB.setBounds(245, 158, 80, 15);
        super.add(MODEL_LB);
        
        MODEL_CB = new JComboBox();
        MODEL_CB.addItem("Cruze");
        MODEL_CB.setSelectedItem(null);
        MODEL_CB.setBackground(new Color(246, 246, 246));
        MODEL_CB.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 17));
        MODEL_CB.setBounds(245, 183, 195, 28);
        MODEL_CB.setFocusable(false);
        super.add(MODEL_CB);
        
        COLOR_LB = new JLabel("Color:");
        COLOR_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        COLOR_LB.setForeground(Color.BLACK);
        COLOR_LB.setBounds(23, 251, 50, 15);
        super.add(COLOR_LB);
        
        ButtonAction ActionButtonColorB = new ButtonAction("", "Select vehicle color", this);
        COLOR_B = new JButton(ActionButtonColorB);
        COLOR_B.setBounds(83, 246, 25, 25);
        COLOR_B.setBackground(null);
        COLOR_B.setBorder(new LineBorder(Color.BLACK));
        COLOR_B.addActionListener((ActionEvent e) -> {
            JColorChooser colorChooser = new JColorChooser();
            colorVehicle = JOptionPane.showConfirmDialog(null, colorChooser, "Select the color of your vehicle...", JOptionPane.OK_CANCEL_OPTION, JOptionPane.PLAIN_MESSAGE) == JOptionPane.OK_OPTION ? selectColor(colorChooser.getColor()):colorVehicle != null ? colorVehicle: null;
        });
        super.add(COLOR_B);
        
        ACTION_LB = new JLabel("User Action:");
        ACTION_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        ACTION_LB.setForeground(Color.BLACK);
        ACTION_LB.setBounds(23, 307, 90, 15);
        super.add(ACTION_LB);
        
        BG = new ButtonGroup();
        
        REGISTER_RB = new JRadioButton("To Register");
        REGISTER_RB.setFocusable(false);
        REGISTER_RB.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        REGISTER_RB.setBackground(null);
        REGISTER_RB.setBounds(20, 335, 110, 20);
        REGISTER_RB.setSelected(true);
        REGISTER_RB.addChangeListener(new ChangeEffect());
        super.add(REGISTER_RB);
        BG.add(REGISTER_RB);
        
        RENT_RB = new JRadioButton("Rent");
        RENT_RB.setFocusable(false);
        RENT_RB.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        RENT_RB.setBackground(null);
        RENT_RB.setBounds(20, 365, 60, 20);
        RENT_RB.addChangeListener(new ChangeEffect());
        super.add(RENT_RB);
        BG.add(RENT_RB);
        
        SELL_RB = new JRadioButton("Sell");
        SELL_RB.setFocusable(false);
        SELL_RB.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        SELL_RB.setBackground(null);
        SELL_RB.setBounds(20, 395, 60, 20);
        SELL_RB.addChangeListener(new ChangeEffect());
        super.add(SELL_RB);
        BG.add(SELL_RB);
        
        PHOTO_LB = new JLabel("Photo:");
        PHOTO_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        PHOTO_LB.setForeground(Color.BLACK);
        PHOTO_LB.setBounds(245, 251, 50, 15);
        super.add(PHOTO_LB);
        
        ButtonAction ActionButtonPhotoB = new ButtonAction("Click Here", "Select photo of the vehicle", this);
        PHOTO_B = new JButton(ActionButtonPhotoB);
        PHOTO_B.setBorder(new LineBorder(Color.BLACK));
        PHOTO_B.setBackground(null);
        PHOTO_B.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        PHOTO_B.setBounds(280, 281, 125, 130);
        PHOTO_B.setFocusable(false);
        PHOTO_B.addActionListener((ActionEvent e) -> {
            JFileChooser fileChooser = new JFileChooser();
            fileChooser.setAcceptAllFileFilterUsed(false);
            FileNameExtensionFilter extensionFilter = new FileNameExtensionFilter(".png, .jpg", "png", "jpg");
            fileChooser.addChoosableFileFilter(extensionFilter);
            fileChooser.setDialogTitle("select the photo of your vehicle...");
            try {
                imageVehicle = fileChooser.showOpenDialog(null) == JFileChooser.APPROVE_OPTION ? (ImageIO.read(fileChooser.getSelectedFile()).getHeight() <= 512 && ImageIO.read(fileChooser.getSelectedFile()).getWidth() <= 512 ? selectPhoto(fileChooser.getSelectedFile()):showErrorPhoto()):imageVehicle != null ? imageVehicle:null;
            } catch (IOException ex) {
            }
        });
        super.add(PHOTO_B);
        
        ButtonAction ActionButtonBackB = new ButtonAction("Back", "Return to previous window", this);
        BACK_B = new JButton(ActionButtonBackB);
        BACK_B.setText("Back");
        BACK_B.setBackground(new Color(73, 73, 73));
        BACK_B.setFont(new Font(Font.SANS_SERIF, Font.BOLD, 14));
        BACK_B.setBorder(new BevelBorder(BevelBorder.RAISED));
        BACK_B.setFocusable(false);
        BACK_B.setForeground(Color.WHITE);
        BACK_B.setBounds(138, 526, 80, 30);
        BACK_B.addActionListener((ActionEvent e) -> {
            frame.placeUser(ActionButtonBackB.getRemoverPanel());
            resetPanel();
        });
        super.add(BACK_B);
        
        ACTION_BUTTON = new ButtonAction("Send", "Register the vehicle", this);
        SEND_B = new JButton(ACTION_BUTTON);
        SEND_B.setBackground(new Color(73, 73, 73));
        SEND_B.setFont(new Font(Font.SANS_SERIF, Font.BOLD, 14));
        SEND_B.setBorder(new BevelBorder(BevelBorder.RAISED));
        SEND_B.setFocusable(false);
        SEND_B.setForeground(Color.WHITE);
        SEND_B.setBounds(245, 526, 80, 30);
        /*SEND_B.addActionListener((ActionEvent e) -> {
            JPanel addPanel = REGISTER_RB.isSelected() && !(PLATE_TF.getText().isBlank()) &&  ? frame.getCrudPanel():null;
            String nombre = REGISTER_RB.isSelected() ? "AutoManagement":"";
            int width = REGISTER_RB.isSelected() ? 800:0;
            int heigth = 
            resetPanel();
        });*/
        super.add(SEND_B);
        
    }

    private File selectPhoto(File file) throws IOException {
        
        PHOTO_B.setText("");
        PHOTO_B.setIcon(new ImageIcon((ImageIO.read(file)).getScaledInstance(125, 130, Image.SCALE_SMOOTH)));
        return file;
    
    }
    
    private Color selectColor(Color color) {
    
        COLOR_B.setBackground(color);
        return color;
    
    }
    
    private File showErrorPhoto(){
    
        JOptionPane.showMessageDialog(null, "Only .png and .jpg extension files are allowed,\nwith a maximum size of 512 X 512 pixels", "Error", JOptionPane.ERROR_MESSAGE);
        return imageVehicle != null ? imageVehicle:null;
        
    }
    
    private void resetPanel(){
    
        imageVehicle = null;
        colorVehicle = null;
        PLATE_TF.setText("");
        YEAR_TF.setText("");
        BRAND_CB.setSelectedItem(null);
        MODEL_CB.setSelectedItem(null);
        COLOR_B.setBackground(null);
        REGISTER_RB.setSelected(true);        
        PHOTO_B.setText("Click Here");
        PHOTO_B.setIcon(null);
        ACTION_BUTTON.setValues("Send", "Register the vehicle");
    
    }
    
    private class ChangeEffect implements ChangeListener {
        
        @Override
        public void stateChanged(ChangeEvent e){
        
            String name = REGISTER_RB.isSelected() ? "Send":"Next";
            String description = REGISTER_RB.isSelected() ? "Register the vehicle":"Continue to the next window";
            ACTION_BUTTON.setValues(name, description);
        
        }
    
    }
    
}
