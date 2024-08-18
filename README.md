# Data_Suite
### 1. Einleitung

#### Projektbeschreibung
Das Projekt "Data_Suite" ist ein umfassendes Softwarepaket, das aus mehreren Submodulen besteht, darunter OCR_Manager_Suite, Template_Center, Text_Anonymizer und html_b2b_form. Diese Module bieten eine breite Palette von Funktionen zur Datenverarbeitung, Dokumentenanalyse und Textanonymisierung. 
Ziel des Projekts ist es, eine modulare und flexible Lösung bereitzustellen, die Unternehmen dabei unterstützt, ihre Datenverarbeitungs- und Anonymisierungsprozesse effizient zu gestalten. 
Da viele Projektkomponenten über das Internet abgerufen werden, ist die korrekte Konfiguration eines Proxy-Dienstes essenziell, insbesondere wenn hinter einer Unternehmens-Firewall gearbeitet wird. 
Durch die Nutzung dieser Suite können Unternehmen ihre Arbeitsabläufe automatisieren, die Datenqualität verbessern und sicherstellen, dass vertrauliche Informationen geschützt bleiben.

#### Zielgruppe
Dieser Leitfaden richtet sich an Business Analysten und Entwickler, die das "Data_Suite"-Projekt in ihre Windows Arbeitsumgebung installieren, konfigurieren und verwenden möchten. Die Anleitung bietet detaillierte Schritte zur Einrichtung und Synchronisation des Projekts auf mehreren Windows-Clients und unterstützt die Zielgruppe dabei, das Projekt effizient zu nutzen und zu erweitern.

#### Überblick über den Leitfaden
Inhalte sind in folgende Hauptabschnitte gegliedert:

1. **Einleitung**: Einführung in das Projekt, die Zielgruppe und den Aufbau des Leitfadens.
2. **Systemvoraussetzungen**: Auflistung der benötigten Software und Komponenten.
3. **Installation und Basiskonfigurationen**: Installation von Git und IntelliJ IDEA, sowie zur Erstellung und Konfiguration von SSH-Schlüsseln.
4. **GIT Setup Main**: Anleitung zur Erstellung des Hauptprojekts.
5. **GIT Setup Submodule**: Konfiguration von Git, Erteilung von Zugriffsrechten, Hinzufügen von Submodulen.
6. **IntelliJ Setup**: Schritte zur Importierung des Projekts in IntelliJ IDEA, Einrichtung virtueller Umgebungen und Konfiguration der Git-Integration.
7. **Entwicklung**: Beschreibung der Projektstruktur, Erläuterung von Code-Beispielen und Hinweise zur Erweiterung des Projekts.
8. **Integration zentraler Konfigurationsdateien**: Erklärungen zu wichtigen Konfigurationsdateien im .idea-Verzeichnis und deren Nutzung.
9. **Fehlerbehebung und Support**: Auflistung häufiger Probleme und deren Lösungen.
10. **Glossar**: Definition wichtiger technischer Begriffe.
11. **Anhang**: Zusätzliche relevante Informationen und Ressourcen für das Projekt.

```plaintext
Data_Suite/
├── venv/                       # Virtuelle Umgebung für Python
│   ├── Scripts/
│   ├── Lib/
│   │   ├── site-packages/
│   │   │   ├── chardet/       # chardet Bibliothek
│   │   │   └── ...
│   └── ...
├── ocr_enricher/               # Submodul für OCR-Manager
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── logs/
│   │   ├── error_log.txt       # Fehler-Datei
│   │   ├── result_log.txt      # Ergebnis-Datei
│   ├── src/
│   │   ├── OCR_Enricher.ps1    # Benötigt ocrmypdf Installation
│   │   ├── pdf_utils.py        # Verwendet PyPDF2
│   ├── requirements.txt        # Abhängigkeiten für OCR_Enricher
│   └── ...
├── template_center/            # Submodul für Template Center
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── __init__.py
│   ├── template_handler.py
│   ├── requirements.txt        # Python-Abhängigkeiten für Template_Center
│   └── ...
├── text_anonymizer/            # Submodul für Text-Anonymisierung
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── __init__.py 
│   ├── anonymizer/
│   │   ├── __init__.py         
│   │   ├── cli.py              # Command Line Ausführung
│   │   ├── config.py           # File-Struktur 
│   │   ├── loader.py           # Inkl. Chardet 
│   │   ├── processor.py        # Inkl. re  
│   ├── flat_files/
│   │   ├── map/                # Map Files 
│   │   │   ├── ../             # Diverse CSV
│   │   ├── rpl/                # Replacement Files 
│   │   │   ├── ../             # Diverse CSV
│   │   ├── src/                # Source Files 
│   │   │   ├── ../             # Diverse CSV
│   │   ├── trg/                # Target Files 
│   │   │   ├── ../             # Diverse CSV
│   │   ├── tests/              # Test Files 
│   │   │   ├── test_imports.py # Test Import
│   │   │   ├── ../             
│   ├── anonymizer.log          # Anonymizer Log für text_anonymizer
│   ├── requirements.txt        # Abhängigkeiten für text_anonymizer
│   └── ...
├── html_b2b_form/              # Submodul für HTML B2B Form
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── .idea/                  # IntelliJ IDEA Projektdateien
│   │   ├── misc.xml
│   │   ├── modules.xml
│   │   ├── jsLibraryMappings.xml
│   │   ├── workspace.xml
│   ├── dist/
│   │   ├── b2b_feed_standalone.html
│   ├── css/
│   │   ├── style.css
│   ├── img/
│   │   ├── img_logo_b64.js
│   │   ├── img_theme_b64.js
│   ├── js/
│   │   ├── data.js
│   │   ├── script.js
│   │   ├── texts.js
│   ├── src/
│   │   ├── index.html
│   │   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── webpack.config.js
│   ├── site.webmanifest
│   ├── requirements.txt        # Abhängigkeiten für HTML_B2B_Form
│   └── ...
├── .git/                       # Git-Verzeichnis für das Hauptprojekt
├── .idea/                      # IntelliJ IDEA Projektdateien
│   ├── misc.xml
│   ├── modules.xml
│   ├── workspace.xml
│   └── ...
├── README.md                   # Projektbeschreibung
├── requirements.txt            # Python-Abhängigkeiten für das Hauptprojekt
├── package.json                # npm-Abhängigkeiten für das Hauptprojekt
│   └── node_modules/
│       ├── axios/              # Beispiel für eine npm-Bibliothek
│       ├── ...
└── zulu/                       # Zulu JDK Verzeichnis
    ├── bin/
    ├── lib/
    └── ...
```
    
### Erläuterungen zu den Projekt-Folder/Dateien

- **venv/**: Enthält virtuelle Umgebung fürs gesamte Projekt, wodurch Python-Abhängigkeiten isoliert und verwaltet werden.
- **ocr_enricher/**, **template_center/**, **text_anonymizer/**, **html_b2b_form/**: Jedes dieser Verzeichnisse repräsentiert ein Submodul, enthält ein eigenes `.git`-Verzeichnis und eine eigene `requirements.txt`, um spezifische Abhängigkeiten zu verwalten.
- **.git/**: Git-Verzeichnis des Hauptprojekts.
- **.idea/**: Konfigurationsdateien für IntelliJ IDEA, die projektübergreifende Einstellungen speichern.
- **README.md**: Beschreibung des des jeweiligen Projekts.
- **requirements.txt**: Liste der Python-Abhängigkeiten für das Hauptprojekt.
- **package.json**: Liste der npm-Abhängigkeiten für das Hauptprojekt.
- **node_modules/**: Enthält installierte npm-Bibliotheken.
- **zulu/**: Verzeichnis fürs Zulu JDK, das als Java SDK verwendet wird.
 
### 2. Systemvoraussetzungen

#### Software
1. **Windows-Betriebssystem:**
   - **Edition:** Windows 10 Enterprise Version 22H2
2. **Git for Windows:**
   - **Path:** C:\Program Files\Git\cmd
3. **IntelliJ IDEA:**
   - **Edition:** Ultimate 2024.1
5. **Python virtuelle Umgebungen:**
   - Details im Abschnitt 6 Step 4 "Virtuelle Umgebung einrichten".   
   - zur Isolation und Verwaltung von Python-Abhängigkeiten innerhalb des Projekts.
7. **Unternehmens-Proxy-Zertifikat:**
   - **Integration über px.exe:** Das Unternehmens-Proxy-Zertifikat wird in die px.ini integriert, wodurch alle Proxy-Anfragen automatisch das Zertifikat verwenden.
   - Das Zertifikat muss lokal in die Zertifikatsverwaltung importiert werden, um die Kommunikation über den Proxy zu ermöglichen.
   - Die genaue Vorgehensweise zur Zertifikatsintegration in px.exe wird im Abschnitt „Proxy-Dienst einrichten“ beschrieben.

#### Komponenten und Berechtigungen
1. **Lokale Administratorrechte:** zur Installation lokaler Software und die Konfiguration des lokalen Systems.

2. **GitHub-Repositories (PrinceEitel, privater Account):**
   - **Main:** https://github.com/PrinceEitel/Data_Suite (alias data_suite) - Sichtbarkeit: Public
   - **Submodule:**
     - OCR_Manager_Suite: https://github.com/PrinceEitel/OCR_Manager_Suite - Sichtbarkeit: Public
     - Template_Center: https://github.com/PrinceEitel/Template_Center - Sichtbarkeit: Private
     - Text_Anonymizer: https://github.com/PrinceEitel/Text_Anonymizer - Sichtbarkeit: Private
     - html_b2b_form: https://github.com/PrinceEitel/html_b2b_form - Sichtbarkeit: Private

3. **Proxy zur Überbrückung von Firewall-Einschränkungen:**
   - **Verwendung von px.exe als zentraler Proxy-Dienst:**
     - Statt HTTP_PROXY und HTTPS_PROXY separat zu konfigurieren, wird px.exe als lokaler Proxy-Dienst verwendet, der alle Proxy-Anfragen zentral über einen Port weiterleitet.
     - Die Konfiguration der px.ini-Datei ermöglicht eine einheitliche Verwaltung und Verwendung der Proxy-Einstellungen für alle relevanten Anwendungen (z.B. IntelliJ, Git).
     - Die Nutzung von Windows-Authentifizierung ist automatisch, sodass keine Speicherung von Anmeldedaten erforderlich ist.
     - Weitere Details zur Einrichtung und Konfiguration von px.exe finden sich im Abschnitt „Proxy-Dienst einrichten“.
  
       
#### Netzwerk- und Ausführungsrechte

1. **Netzwerk- und Ausführungsrechte zum unregelmässigen und regelmässigen Austausch:**
   - **Netzwerkzugriff:** Sicherstellen, dass keine Netzwerkrestriktionen den Zugriff auf GitHub und andere benötigte Ressourcen blockieren. 
     - https://www.jetbrains.com/idea/download/ => JetBrains-Website für IntelliJ IDEA Ultimate
     - www.npmjs.com => node.js (JavaScript package manager)  
     - www.azul.com/downloads/#zulu => Azul Zulu JDK (certified build of OpenJDK)
     - www.github.com => GitHub (für Download und Sync der Repositorys muss Zugriff auf GitHub gewährleistet sein)
     - https://webpack.js.org => webpack.js (extensible and configurable static module bundler for JavaScript applications)
     - https://pypi.org/project/pdf-utils => pdf_utils.py (verwendet PyPDF2)
     - https://pypi.org/project/chardet   => Chardet (Universal Character Encoding Detector)
   - Weitere Details zur Proxy-Konfiguration und benötigten Berechtigungen finden sich in Abschnitt 6 Step 11 „Proxy-Dienst einrichten“.

**Quellen:**
- [Setting Up Git Behind a Proxy](https://stackoverflow.com/questions/783811/getting-git-to-work-with-a-proxy-server-fails-with-request-timed-out)
- [Cloning GitHub Repository Behind Corporate Proxy](https://stackoverflow.com/questions/34988038/git-clone-behind-corporate-proxy)

## 3. Installation und Basiskonfigurationen

### 3.1 Git-Installation und Konfiguration

1. **Installation von Git for Windows:**
   - Git for Windows kann von der offiziellen Git-Website [git-scm.com](https://git-scm.com) heruntergeladen werden.
   - Installiere Git mit den Standardeinstellungen.

2. **Überprüfung der Git-Installation:**
   - Nach der Installation kann die erfolgreiche Einrichtung von Git mit folgendem Befehl überprüft werden:
   ```console
   git --version
   ```
   - Beispielausgabe: `git version 2.x.x`.

3. **Konfiguration von Git:**
   - Nach der Installation sollte Git konfiguriert werden, um den Benutzer für alle zukünftigen Git-Aktionen zu identifizieren.
   - Konfiguriere den Benutzernamen:
   ```console
   git config --global user.name "Benutzername"
   ```
   - Konfiguriere die E-Mail-Adresse:
   ```console
   git config --global user.email "email@example.com"
   ```
   - Überprüfe die Konfiguration:
   ```console
   git config --global --list
   ```
   
4. **Proxy-Einstellungen für Git (falls erforderlich):**
   - Bei Verwendung eines Proxy-Servers können die Proxy-Einstellungen manuell in der gitconfig konfiguriert werden:
   ```console
   git config --global http.proxy http://username:password@proxy-server:port
   git config --global https.proxy https://username:password@proxy-server:port
   ```
5. **Überprüfung der Proxy-Konfiguration und Erreichbarkeit von GitHub:**
   - Um sicherzustellen, dass GitHub über den konfigurierten Proxy erreichbar ist, verwende `curl`:
   ```console
   curl -x http://<proxy-server>:<port> -I https://github.com
   ```
   - sendet eine HTTP-Anfrage an GitHub über den konfigurierten Proxy. Eine erfolgreiche Antwort zeigt, dass die Proxy-Konfiguration korrekt ist und GitHub erreichbar ist.
   - `curl` berücksichtigt die Proxy-Einstellungen und simuliert die tatsächliche Kommunikation, wie sie auch bei der Verwendung von Git oder IntelliJ stattfinden würde.
   - `nslookup` und `Test-NetConnection` könnten Eindruck erwecken, dass GitHub erreichbar ist, obwohl dies durch den Proxy blockiert werden könnte. `curl` vermeidet dies.

### 3.2 IntelliJ IDEA Installation

1. **Download und Installation von IntelliJ IDEA Ultimate:**
   - IntelliJ IDEA Ultimate 2024.1 kann von der JetBrains-Website [jetbrains.com/idea/download](https://www.jetbrains.com/idea/download) heruntergeladen werden.
   - Installiere die Software mit den Standardeinstellungen.

### 3.3 SSH-Schlüssel erstellen und konfigurieren

1. **Erstellung eines neuen SSH-Schlüssels:**
   - Einen neuen SSH-Schlüssel generieren:
   ```console
   ssh-keygen -t rsa -b 4096 -C "email@example.com"
   ```
   - Den Standardspeicherort (`C:\Users\Benutzername\.ssh\id_rsa`) durch Drücken von Enter akzeptieren. Optional kann ein Passwort festgelegt werden.

2. **Starten des SSH-Agents und Hinzufügen des Schlüssels:**
   - Start des SSH-Agents:
   ```console
   Start-Service ssh-agent
   ```
   - Hinzufügen des privaten Schlüssels zum Agenten:
   ```console
   ssh-add ~/.ssh/id_rsa
   ```

3. **Kopieren des öffentlichen Schlüssels:**
   - Der öffentliche Schlüssel kann wie folgt kopiert werden:
   ```console
   Get-Content ~/.ssh/id_rsa.pub | Set-Clipboard
   ```

4. **Hinzufügen des SSH-Schlüssels zu GitHub:**
   - Anmelden bei GitHub, dann zu **Settings** -> **SSH and GPG keys** -> **New SSH key** navigieren.
   - Den kopierten Schlüssel einfügen und speichern.

5. **Überprüfung der SSH-Verbindung zu GitHub:**
   - Die Verbindung zu GitHub kann mit folgendem Befehl getestet werden:
   ```console
   ssh -T git@github.com
   ```

### 3.4 **CA-Zertifikate hinzufügen:**
   - **Integration über px.exe:** Das Unternehmens-Proxy-Zertifikat wird über px.exe zentral verwaltet, was die manuelle Integration in einzelne Anwendungen überflüssig macht.
   - Stelle sicher, dass das Zertifikat in die lokale Zertifikatsverwaltung importiert wird, damit es von px.exe genutzt werden kann.
   - detaillierte Vorgehensweise zur Zertifikatsintegration in px.exe ist im Abschnitt „Proxy-Dienst einrichten“ beschrieben.

### 4. GIT Setup Main

#### 4.1 Erstellen des Hauptprojekts aus GitHub

**Schritte zur Erstellung des GitHub-Repositorys für `Data_Suite`:**

1. **Erstellen des GitHub-Repositorys:**
   - Auf [GitHub](https://github.com) mit dem privaten Account (PrinceEitel) anmelden.
   - Das Plus-Symbol (+) in der oberen rechten Ecke anklicken und "New repository" wählen.
   - Den Namen `Data_Suite` eingeben.
   - Die gewünschte Sichtbarkeit (Public oder Private) auswählen.
   - Auf "Create repository" klicken, um das Repository zu erstellen.

2. **Initialisierung des lokalen Git-Repositorys:**
   - Die Eingabeaufforderung (Cmd) oder PowerShell öffnen.
   - Zum gewünschten Verzeichnis navigieren, in dem das Projekt erstellt werden soll:
   ```console
   cd U:\data_suite
   ```
   - Ein neues Git-Repository im aktuellen Verzeichnis initialisieren:
   ```console
   git init
   ```

3. **Hauptbranch umbenennen und Änderungen pushen:**
   - Den Hauptbranch in `main` umbenennen, um dem gängigen Standard zu folgen:
   ```console
   git branch -M main
   ```
   - Änderungen zum Remote-Repository pushen, um das lokale Repository mit dem Remote-Repository zu verbinden:
   ```console
   git push -u origin main
   ```

4. **Verbindung zum Remote-Repository herstellen:**
   - Das Remote-Repository hinzufügen, um das lokale Repository mit GitHub zu verbinden:
   ```console
   git remote add origin https://github.com/PrinceEitel/Data_Suite.git
   ```
   - Die Verbindung zum Remote-Repository überprüfen, um sicherzustellen, dass die URLs für `fetch` und `push` korrekt sind:
   ```console
   git remote -v
   ```
   - Die Ausgabe sollte die URLs für `fetch` und `push` anzeigen, die mit dem GitHub-Repository verbunden sind.

5. **Überprüfung der Verzeichnisse und bestehenden Git-Repositories:**
   - Überprüfen, ob das `data_suite`-Verzeichnis bereits existiert:
   ```powershell
   if (Test-Path "U:\data_suite") {
       Write-Host "Verzeichnis existiert bereits. Bitte ein anderes Verzeichnis wählen oder das bestehende löschen."
   } else {
       Write-Host "Verzeichnis existiert nicht. Fortfahren mit Erstellung."
   }
   ```
   - Sicherstellen, dass keine bestehenden Git-Repositories im Zielverzeichnis vorhanden sind:
   ```powershell
   if (Test-Path "U:\data_suite\.git") {
       Write-Host "Ein Git-Repository existiert bereits in diesem Verzeichnis. Bitte löschen oder ein anderes Verzeichnis wählen."
   } else {
       Write-Host "Kein Git-Repository gefunden. Fortfahren mit Erstellung."
   }
   ```
   
### 5. GIT Setup Submodule

#### 5.1 Beschreibung der Konfigurationsdateien

- **.gitconfig Einstellungen für den Unternehmens-Account VX:**
    - Die `.gitconfig`-Datei enthält die benutzerspezifischen Konfigurationen für Git. Für den Unternehmens-Account VX wird sie folgendermaßen eingerichtet:

    ```plaintext
    [filter "lfs"]
        clean = git-lfs clean -- %f        # Bereinigt Dateien vor dem Commit, um große Dateien durch LFS-Pointer zu ersetzen
        smudge = git-lfs smudge -- %f      # Stellt die Originaldateien aus LFS wieder her
        process = git-lfs filter-process   # Führt den LFS-Filterprozess aus
        required = true                    # LFS ist für dieses Repository erforderlich

    [user]
        name = VX                          # Name des Benutzers für Commits
        email = vx@company.com             # E-Mail-Adresse des Benutzers für Commits

    [safe]
        directory = U:/data_suite/text_anonymizer     # Sichere Verzeichnisse für Git-Operationen
        directory = U:/data_suite/template_center
        directory = U:/data_suite/OCR_Enricher
        directory = U:/data_suite/html_b2b_form

    [core]
        autocrlf = true                     # Konvertiert Zeilenenden automatisch (Windows <-> Unix)

    [merge]
        tool = meld                        # Merge-Tool für Konfliktlösungen

    [rerere]
        enabled = true                      # Aktiviert die Wiederverwendung aufgezeichneter Konfliktlösungen
    ```

    **Erklärungen:**

    - `[filter "lfs"]`: Einstellungen für Git Large File Storage (LFS), um große Dateien effizient zu verwalten.
    - `[user]`: Benutzername und E-Mail-Adresse für Git-Commits.
    - `[safe]`: Sichere Verzeichnisse, in denen Git-Befehle ausgeführt werden dürfen.
    - `[core]`: Core-Einstellungen wie `autocrlf`, das sicherstellt, dass Zeilenendungen korrekt zwischen Windows und Unix-Systemen umgewandelt werden.
    - `[merge]`: Merge-Tool, das für Konfliktlösungen verwendet wird (hier: `meld`).
    - `[rerere]`: Aktiviert die Wiederverwendung von aufgezeichneten Lösungen für Merge-Konflikte.

#### 5.2 Zugriffsrechte konfigurieren

- **Einladen des VX-Accounts zu den privaten Repositories:**

    `1`. Navigiere zu den Repository-Einstellungen der privaten Repositories (z.B. `OCR_Manager_Suite`, `Template_Center`, `Text_Anonymizer` und `html_b2b_form`).
    `2`. Gehe zu `Settings -> Manage access`.
    `3`. Klicke auf `Invite a collaborator` und gebe den VX-Account (z.B. `vx@company.com`) ein.
    `4`. Weise den entsprechenden Zugriff zu (z.B. `Write` oder `Admin`).

#### 5.3 Vorab-Check der GIT Konfigurationen (Submodule-Ebene)

- **Überprüfung der GIT-Installation und Konfiguration:**

    `1`. Git Installation überprüfen:

    ```powershell
    git --version
    ```

    `2`. Git-Konfiguration überprüfen:

    ```powershell
    git config --global user.name
    git config --global user.email
    ```

#### 5.4 Submodule hinzufügen und konfigurieren

- **Hinzufügen der Submodule:**

    ```powershell
    git submodule add [https://github.com/PrinceEitel/OCR_Manager_Suite.git](https://github.com/PrinceEitel/OCR_Manager_Suite.git) ocr_enricher
    git submodule add [https://github.com/PrinceEitel/Template_Center.git](https://github.com/PrinceEitel/Template_Center.git) template_center
    git submodule add [https://github.com/PrinceEitel/Text_Anonymizer.git](https://github.com/PrinceEitel/Text_Anonymizer.git) text_anonymizer
    git submodule add [https://github.com/PrinceEitel/html_b2b_form.git](https://github.com/PrinceEitel/html_b2b_form.git) html_b2b_form
    git submodule init          # Initialisiert die Submodule
    git submodule update        # Aktualisiert die Submodule auf den neuesten Stand
    ```

- **Stagen und committen der Submodule:**

    ```powershell
    git add .gitmodules ocr_enricher template_center text_anonymizer html_b2b_form
    git commit -m "Submodule OCR_Manager_Suite, Template_Center, Text_Anonymizer und html_b2b_form hinzugefügt"
    git push origin main        # Änderungen ins Remote-Repository übertragen
    ``` 

### 6. IntelliJ Setup

#### 6.1 Vorab-Checks

Zwei Möglichkeiten stehen zur Verfügung, um die Installation und Konfiguration von IntelliJ IDEA zu überprüfen:

- **Automatisierte Überprüfung:** Ein Skript führt eine schnelle und automatisierte Systemüberprüfung durch, ideal für regelmäßige oder wiederholte Setups.
  
- **Manuelle Überprüfung:** Eine detaillierte, manuelle Kontrolle einzelner Komponenten, besonders nützlich, wenn spezifische Probleme vermutet werden oder das Projekt erstmalig eingerichtet wird.

**Empfehlung:** Die manuelle Überprüfung ist bei der erstmaligen Einrichtung oder bei Problemen zu bevorzugen. Für wiederholte Installationen ist das automatisierte Skript effizienter.

##### 6.1.1 Automatisierte Überprüfung mit Skript

1. **Skript zur Überprüfung der Installation und Konfiguration ausführen:**
   - Das entsprechende Skript befindet sich im Anhang unter "Hilfs- und Prüfungs-Scripts/IntelliJ System-Check Powershell Script".
   - Vor der Ausführung muss das Skript signiert werden (siehe [Abschnitt 6.3](#63-signieren-von-powershell-skripten-im-intellij-terminal) "Signieren von PowerShell-Skripten im IntelliJ Terminal").
   - Ausführung des Skripts im Terminal (PowerShell) oder direkt unter Windows:
     ```powershell
     .\intelliJ_system_check.ps1 -homeDir "U:\"
     ```

##### 6.1.2 Manuelle Überprüfung

1. **Installation überprüfen:**
   - Unter `Help` -> `About` kann sichergestellt werden, dass `IntelliJ IDEA Ultimate 2024.1` installiert ist.

2. **Plugins überprüfen:**
   - Unter `File` -> `Settings` -> `Plugins` prüfen, ob die erforderlichen Plugins (`Python`, `Git`, etc.) installiert und aktiviert sind.

3. **Konfigurationsdateien prüfen:**
   - Sicherstellen, dass die Konfigurationsdateien im `.idea`-Verzeichnis vorhanden und korrekt sind (`misc.xml`, `modules.xml`, `compiler.xml`, `workspace.xml`, `vcs.xml`).

#### 6.2 IntelliJ Terminal konfigurieren

Um das Terminal in IntelliJ IDEA optimal zu nutzen, sind folgende Schritte erforderlich:

1. **Einstellungen öffnen:**
   - `File` -> `Settings` (oder `Ctrl+Alt+S`).

2. **Terminal konfigurieren:**
   - `Tools` -> `Terminal`.

3. **Shell Path festlegen:**
   - **Für PowerShell 7 (empfohlen):**
     ```console
     Shell Path: C:\Program Files\PowerShell\7\pwsh.exe
     Shell Options: -NoLogo
     ```
   - **Für die Eingabeaufforderung (cmd):**
     ```console
     Shell Path: C:\Windows\System32\cmd.exe
     Shell Options: /K
     ```

4. **Konfiguration testen:**
   - Das Terminal innerhalb von IntelliJ IDEA unter `View` -> `Tool Windows` -> `Terminal` öffnen und überprüfen, ob die Einstellungen korrekt übernommen wurden. Es sollte sichergestellt werden, dass PowerShell 7 verwendet wird.

### 6.3 Signieren von PowerShell-Skripten im IntelliJ Terminal

In gut gesicherten Unternehmensumgebungen ist es oft erforderlich, dass PowerShell-Skripte signiert werden, um ihre Integrität und Authentizität sicherzustellen. Eine digitale Signatur bestätigt, dass das Skript seit der Signierung nicht verändert wurde. **Jedes Mal, wenn ein Skript bearbeitet wird, ändert sich sein Hash-Wert, wodurch die ursprüngliche Signatur ungültig wird.** Daher muss das Skript nach jeder Änderung erneut signiert werden, um es weiterhin ausführen zu können. Dieser Abschnitt erläutert sowohl den Prozess der Erst-Signatur als auch die notwendige Aktualisierung der Signatur nach Codeänderungen.

#### 6.3.1 PowerShell 7 (Empfohlen)

Dieser Abschnitt führt Schritt für Schritt durch den Prozess des Signierens von PowerShell-Skripten im IntelliJ Terminal. Dabei wird unterschieden zwischen:

- **Erst-Signatur des Skripts:** Hier müssen alle Schritte durchgeführt werden, um das Zertifikat zu erstellen und das Skript zu signieren.
- **Update-Signatur nach einer Skriptänderung:** Hier sind nur die Schritte zur Signatur selbst erforderlich, da das Zertifikat bereits besteht.

##### 6.3.1.1 Erstellen eines selbstsignierten Zertifikats (Erst-Signatur)

Zuerst wird ein selbstsigniertes Zertifikat erstellt, das für die Signierung der Skripte verwendet wird.

```powershell
$cert = New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -Subject "CN=MyScriptSigningCert" -KeyUsage DigitalSignature -Type CodeSigningCert
```

##### 6.3.1.2 Exportieren des Zertifikats (Erst-Signatur)

Das erstellte Zertifikat muss nun exportiert werden, um es in den vertrauenswürdigen Zertifikatspeicher des Systems zu importieren.

```powershell
Export-Certificate -Cert $cert -FilePath "C:\Users\<DeinBenutzername>\MyScriptSigningCert.cer"
```

##### 6.3.1.3 Importieren des Zertifikats in vertrauenswürdige Speicher (Erst-Signatur)

Damit das Zertifikat vom System als vertrauenswürdig anerkannt wird, muss es in die entsprechenden Zertifikatspeicher importiert werden.

```powershell
Import-Certificate -FilePath "C:\Users\VX\cert\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\Root
Import-Certificate -FilePath "C:\Users\VX\cert\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
```

##### 6.3.1.4 Ermitteln des Thumbprints (Erst-Signatur & Update-Signatur)

Der Thumbprint des Zertifikats wird benötigt, um das Skript signieren zu können. Dieser Schritt stellt sicher, dass das richtige Zertifikat verwendet wird.

```powershell
$thumbprint = (Get-ChildItem -Path Cert:\CurrentUser\My | Where-Object {$_.Subject -eq "CN=MyScriptSigningCert"} | Select-Object -ExpandProperty Thumbprint).Trim()
```

##### 6.3.1.5 Signieren des Skripts (Erst-Signatur & Update-Signatur)

Nachdem das Zertifikat eingerichtet ist, kann das Skript signiert werden. **Dieser Schritt muss nach jeder Änderung am Skript wiederholt werden.**

```powershell
Set-AuthenticodeSignature -FilePath "U:\intelliJ_system_check.ps1" -Certificate (Get-Item -Path Cert:\CurrentUser\My\$thumbprint)
```

##### 6.3.1.6 Ausführungsrichtlinie setzen (optional) (Erst-Signatur & Update-Signatur)

Für die Ausführung signierter Skripte kann die Ausführungsrichtlinie auf `RemoteSigned` gesetzt werden, um sicherzustellen, dass nur vertrauenswürdige Skripte ausgeführt werden dürfen.

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

#### 6.3.2 Regelmäßige Aktualisierung der Signatur

**Wichtiger Hinweis:** **Nach jeder Änderung am Skript muss die Signatur aktualisiert werden**, da die Änderung den Hash-Wert des Skripts verändert und die ursprüngliche Signatur ungültig macht. Führen Sie dazu die Schritte **6.3.1.4 bis 6.3.1.6** erneut aus, um sicherzustellen, dass das Skript weiterhin den Sicherheitsrichtlinien entspricht und ausgeführt werden kann.


#### 6.4 Virtuelle Umgebung einrichten

Zum Einrichten einer Python-Umgebung und zur Verwaltung von Abhängigkeiten:

1. **Terminal öffnen:**
   - Terminal in IntelliJ IDEA unter `View` -> `Tool Windows` -> `Terminal` öffnen.

2. **Virtuelle Umgebung erstellen:**
   ```powershell
   python -m venv venv
   ```

3. **Virtuelle Umgebung aktivieren:**
   ```powershell
   venv\Scripts\activate
   ```

4. **Abhängigkeiten installieren:**
   ```powershell
   pip install -r requirements.txt
   ```

**Erweiterte Schritte:**

- **Installierte Pakete überprüfen:**
   ```powershell
   pip list
   ```

- **Weitere Pakete hinzufügen:**
   ```powershell
   pip install <package-name>
   ```

- **Kompatibilität sicherstellen:**
   - Überprüfen, ob alle notwendigen Pakete und deren Versionen korrekt installiert sind.

**Installation und Verwaltung von npm-Abhängigkeiten in einer zentralen virtuellen Umgebung:**

- **Virtuelle Umgebung erstellen:**
   ```console
   cd U:\data_suite
   mkdir venv
   ```

- **Initiale Installation der Abhängigkeiten:**
   ```console
   npm install --prefix ./venv
   ```

- **Neue Abhängigkeiten hinzufügen:**
   ```console
   npm install <paketname> --prefix ./venv --save
   ```

- **Entwicklungsabhängigkeiten hinzufügen:**
   ```console
   npm install <paketname> --prefix ./venv --save-dev
   ```

- **Abhängigkeiten aktualisieren:**
   ```console
   npm update --prefix ./venv
   ```

- **Installierte Abhängigkeiten überprüfen:**
   ```console
   npm list --prefix ./venv
   ```

#### 6.5 Zulu JDK und andere notwendige Komponenten

Zur Installation und Konfiguration des Zulu JDK und weiterer Bibliotheken:

1. **Zulu JDK installieren:**
   - Das Zulu JDK von der offiziellen Webseite herunterladen und installieren.

2. **In IntelliJ konfigurieren:**
   - `File` -> `Project Structure` -> `Project Settings` -> `Project`.
   - Das Zulu JDK als SDK auswählen und den Pfad überprüfen.

3. **Installation überprüfen:**
   - Sicherstellen, dass das Zulu JDK korrekt installiert ist und keine Fehlermeldungen auftreten.

**Installation von `chardet` und anderen Bibliotheken:**

- **Bibliothek in der virtuellen Umgebung installieren:**
   ```powershell
   pip install chardet
   ```

- **Installation überprüfen:**
   ```powershell
   pip show chardet
   ```

#### 6.6 Projekt importieren

Zum Importieren des Projekts `Data_Suite` in IntelliJ IDEA:

1. **Projekt importieren:**
   - IntelliJ IDEA öffnen und zu `File` -> `New` -> `Project from Existing Sources...` navigieren.
   - Das Verzeichnis `U:\data_suite` auswählen und den Anweisungen folgen.

2. **Submodule konfigurieren:**
   - `File` -> `Settings` -> `Version Control` -> `Git`.
   - Sicherstellen, dass alle Submodule korrekt erkannt und konfiguriert sind.

#### 6.7 Python Interpreter konfigurieren

Zur Konfiguration des Python Interpreters:

1. **Einstellungen öffnen:**
   - `File` -> `Settings` -> `Project: <Projektname>` -> `Python Interpreter`.

2. **Interpreter hinzufügen:**
   - Auf das Zahnrad-Symbol klicken und `Add...` auswählen.
   - `Existing environment` wählen und zum Python-Interpreter in der virtuellen Umgebung navigieren (`U:\data_suite\venv\Scripts\python.exe`).

#### 6.8 Quellverzeichnisse konfigurieren

Um relevante Verzeichnisse als Quellverzeichnisse zu markieren:

1. **Projektstruktur öffnen:**
   - `File` -> `Project Structure`.

2. **Verzeichnisse markieren:**
   - Rechtsklick auf das Verzeichnis im Projektfenster -> `Mark Directory as` -> `Sources Root`.

#### 6.9 GIT-Integration im IntelliJ konfigurieren

Zur Überprüfung und Konfiguration der Git-Integration in IntelliJ IDEA:

1. **Einstellungen öffnen:**
   - `File` -> `Settings` -> `Version Control` -> `Git`.

2. **Pfad zur Git-Installation überprüfen:**
   - Sicherstellen, dass der Pfad zur Git-Installation korrekt gesetzt ist (z.B., `C:\Program Files\Git\cmd\git.exe`).

3. **Git-Integration aktivieren:**
   - Überprüfen, ob die Git-Integration aktiviert ist und das Hauptprojekt sowie alle Submodule erkannt werden.

4. **Repository-Status überprüfen:**
   - Das Terminal in IntelliJ IDEA öffnen und folgende Befehle ausführen:
   ```powershell
   git pull
   git submodule init
   git submodule update
   ```
#### 6.10 Proxy-Dienst einrichten

**1. Installation von px.exe:**
   - Laden Sie px.exe von [GitHub](https://github.com/genotrance/px/releases) herunter.
   - Entpacken Sie die Datei und speichern Sie sie im Verzeichnis `C:\Program Files\px-pxy`.
   - Führen Sie `px.exe --install` aus, um den Proxy-Dienst zu installieren.

**2. Konfiguration der px.ini:**
   - Erstellen Sie eine `px.ini` im Installationsverzeichnis mit folgenden Inhalten:
     ```ini
     [proxy]
     server = proxy.company.com:8080
     listen = 3128
     ntlm = yes
     user = DOMAIN\Username
     [certificates]
     cert = C:\path\to\corporate-proxy-cert.pem
     ```
   - Dieser Abschnitt konfiguriert den Proxy-Server, den Port und integriert das Unternehmens-Proxy-Zertifikat.

**3. Windows-Authentifizierung aktivieren:**
   - px.exe nutzt automatisch die Windows-Anmeldedaten, sodass keine weiteren Konfigurationen für die Authentifizierung notwendig sind.

**4. Konfiguration der Anwendungen (Git, IntelliJ):**
   - Stelle sicher, dass sowohl Git als auch IntelliJ auf px.exe als Proxy-Agent zugreifen. Dies geschieht durch die Standard-Proxy-Einstellung, die über px.exe geleitet wird.
     - In Git kann dies durch Entfernen aller manuell gesetzten Proxy-Einstellungen sichergestellt werden.
     - In IntelliJ verwende die Proxy-Einstellungen unter `File -> Settings -> Appearance & Behavior -> System Settings -> HTTP Proxy`, um auf den lokalen px.exe Proxy (z.B. `localhost:3128`) zu verweisen.

**5. Testen der Proxy-Konfiguration:**
   - Überprüfen Sie die Funktionalität, indem Sie eine Verbindung zu GitHub oder einer anderen externen Ressource herstellen. Alle Anfragen sollten über px.exe geleitet werden.
   - Verwenden Sie dazu Befehle wie:
     ```console
     git clone https://github.com/YourRepo/YourProject.git
     curl -x http://localhost:3128 https://www.github.com
     ```

### 7. Entwicklung

#### Projektstruktur
- **Beschreibung der Projektstruktur und der einzelnen Dateien und Verzeichnisse:**
  - **Hauptverzeichnis (`data_suite`):** Enthält das gesamte Projekt und die grundlegenden Konfigurationsdateien wie `.gitignore`, `README.md`, und `requirements.txt`.
  - **Verzeichnis `src`**: Hauptverzeichnis für den Quellcode.
    - **Module `ocr_enricher`**: Enthält die Logik und Funktionen zur Texterkennung und Anreicherung.
      - `ocr_main.py`: Hauptdatei für OCR-Funktionen.
      - `utils/`: Hilfsfunktionen und Tools.
    - **Module `template_center`**: Verwaltung und Verarbeitung von Templates.
      - `template_main.py`: Hauptdatei für Template-Funktionen.
      - `templates/`: Sammlung von Vorlagen.
    - **Module `text_anonymizer`**: Funktionen zur Textanonymisierung.
      - `anonymizer_main.py`: Hauptdatei für Anonymisierungsfunktionen.
      - `rules/`: Anonymisierungsregeln und -muster.
    - **Module `html_b2b_form`**: Verarbeitung und Verwaltung von HTML-Formularen.
      - `form_main.py`: Hauptdatei für Formularfunktionen.
      - `forms/`: HTML-Formularvorlagen.
  - **Verzeichnis `tests`**: Enthält die Tests für das Projekt.
    - **Unit-Tests**: Getrennte Verzeichnisse für Tests der einzelnen Module (`test_ocr_enricher.py`, `test_template_center.py`, etc.).
  - **Konfigurationsdateien**:
    - `.gitignore`: Dateien und Verzeichnisse, die von Git ignoriert werden sollen.
    - `README.md`: Projektbeschreibung und Anleitungen.
    - `requirements.txt`: Liste der Python-Abhängigkeiten.
  - **Virtuelle Umgebung (`venv`)**: Enthält die Python-Umgebung und installierten Pakete.

#### Code-Beispiele
- **Ausführliche Erläuterung des Codes mit Beispielen und Erklärungen:**
  - **OCR Enricher Beispiel:**
```python
    # ocr_main.py
    import pytesseract
    from PIL import Image

    def extract_text_from_image(image_path):
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image)
        return text

    if __name__ == "__main__":
        text = extract_text_from_image('sample_image.png')
        print(text)
    
- **Erläuterung:**
      - `pytesseract`: Bibliothek zur Texterkennung.
      - `PIL`: Bibliothek zur Bildverarbeitung.
      - `extract_text_from_image`: Funktion zur Extraktion von Text aus einem Bild.
``` 
  - **Template Center Beispiel:**
```python
    # template_main.py
    from jinja2 import Template

    def render_template(template_str, context):
        template = Template(template_str)
        return template.render(context)

    if __name__ == "__main__":
        template_str = "Hello, {{ name }}!"
        context = {"name": "World"}
        print(render_template(template_str, context))
```     
- **Erläuterung:**
      - `jinja2`: Template-Engine zur Verarbeitung von Vorlagen.
      - `render_template`: Funktion zur Verarbeitung und Ausgabe einer Vorlage mit Kontextdaten.

  - **Text Anonymizer Beispiel:**
```python
    # anonymizer_main.py
    import re

    def anonymize_text(text, patterns):
        for pattern in patterns:
            text = re.sub(pattern, "****", text)
        return text

    if __name__ == "__main__":
        text = "My phone number is 123-456-7890."
        patterns = [r"\d{3}-\d{3}-\d{4}"]
        print(anonymize_text(text, patterns))
 ```    
- **Erläuterung:**
      - `re`: Bibliothek zur Mustererkennung und -ersetzung.
      - `anonymize_text`: Funktion zur Anonymisierung von Texten anhand gegebener Muster.

#### Erweiterungsmöglichkeiten

- **Hinweise zur Erweiterung des Projekts um neue Funktionen:**
  - **Neue Module hinzufügen:**
    - Strukturiere neue Module ähnlich den bestehenden (`src/new_module/`).
    - Erstelle Hauptdateien und Unterverzeichnisse entsprechend den Anforderungen.
  - **Erweiterung bestehender Module:**
    - Füge neue Funktionen in den Hauptdateien hinzu.
    - Nutze bestehende Hilfsfunktionen und -klassen.
  - **Integration neuer Bibliotheken:**
    - Füge neue Abhängigkeiten in die `requirements.txt` ein.
    - Installiere die neuen Pakete in der virtuellen Umgebung:
```python
      pip install -r requirements.txt
```       
- **Erweiterung der Tests:**
    - Erstellen neuer Testdateien für neue Module oder Funktionen.
    - vorhandene Testmuster und -strukturen nutzen.

### 8. Integration zentraler Konfigurationsdateien

#### Wichtige Konfigurationsdateien im .idea-Verzeichnis:
- **misc.xml**: Enthält allgemeine Projekteinstellungen wie das verwendete JDK, das Projektverzeichnis und den Compiler-Ausgabeort.
- **modules.xml**: Speichert Informationen über die Module des Projekts, deren Pfade und die zugehörigen Konfigurationsdateien.
- **compiler.xml**: Konfiguriert die Compiler-Einstellungen für das Projekt, einschließlich Compiler-Optionen und Ausgabeverzeichnisse.
- **workspace.xml**: Speichert benutzerspezifische Einstellungen wie die Anordnung von Fenstern, Editor-Tabs, laufende Aufgaben und andere projektspezifische Einstellungen.
- **vcs.xml**: Enthält die Versionskontrollsystem-Einstellungen für das Projekt, wie z.B. die Konfiguration der Git-Integration und andere VCS-spezifische Einstellungen.

#### Beispiele für zentrale Konfigurationsdateien:

- **misc.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="ProjectRootManager" version="2" project-jdk-name="Python 3.12" project-jdk-type="Python SDK">
      <output url="file://$PROJECT_DIR$/out" />
    </component>
  </project>
 ```  
- **Erklärung**: Diese Datei legt das Projekt-JDK auf "Python 3.12" fest und definiert das Ausgabeort für den Compiler.

- **modules.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="ProjectModuleManager">
      <modules>
        <module fileurl="file://$PROJECT_DIR$/data_suite.iml" filepath="$PROJECT_DIR$/data_suite.iml" />
        <module fileurl="file://$PROJECT_DIR$/ocr_enricher.iml" filepath="$PROJECT_DIR$/ocr_enricher.iml" />
        <module fileurl="file://$PROJECT_DIR$/template_center.iml" filepath="$PROJECT_DIR$/template_center.iml" />
        <module fileurl="file://$PROJECT_DIR$/text_anonymizer.iml" filepath="$PROJECT_DIR$/text_anonymizer.iml" />
        <module fileurl="file://$PROJECT_DIR$/html_b2b_form.iml" filepath="$PROJECT_DIR$/html_b2b_form.iml" />
      </modules>
    </component>
  </project>
 ```  
- **Erklärung**: Diese Datei listet alle Module des Projekts auf und definiert deren Pfade.

- **compiler.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="CompilerConfiguration">
      <option name="DEFAULT_COMPILER" value="Javac" />
      <resourceExtensions />
      <wildcardResourcePatterns>
        <entry name="!?*.java" />
      </wildcardResourcePatterns>
    </component>
  </project>
```   
- **Erklärung**: Datei konfiguriert die Compiler-Einstellungen und gibt an, dass Javac als Standard-Compiler verwendet wird.

- **workspace.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="RunManager">
      <configuration default="false" type="PythonConfigurationType" factoryName="Python">
        <module name="data_suite" />
        <option name="INTERPRETER_OPTIONS" value="" />
        <option name="PARENT_ENVS" value="true" />
        <option name="SDK_HOME" value="$USER_HOME$/Python/3.12" />
        <envs>
          <env name="PYTHONUNBUFFERED" value="1" />
        </envs>
        <option name="WORKING_DIRECTORY" value="$PROJECT_DIR$" />
        <option name="IS_MODULE_SDK" value="true" />
      </configuration>
    </component>
  </project>
```   
- **Erklärung**: Datei speichert benutzerspezifische Einstellungen für die Ausführung von Python-Skripten, einschließlich der Arbeitsverzeichnisse und Umgebungsvariablen.

- **vcs.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="VcsDirectoryMappings">
      <mapping directory="$PROJECT_DIR$" vcs="Git" />
    </component>
  </project>
```   
- **Erklärung**: Diese Datei definiert die Zuordnung des Projekts zu einem Versionskontrollsystem, in diesem Fall Git.

#### Verwendung zentraler Konfigurationsdateien:

- **Vorgehensweise zur Einbindung und Nutzung zentraler Konfigurationsdateien in der Versionskontrolle**:
  1. **Konfigurationsdateien in die Versionskontrolle aufnehmen**:
     -  `.idea`-Verzeichnis und die relevanten Konfigurationsdateien (`misc.xml`, `modules.xml`, `compiler.xml`, `workspace.xml`, `vcs.xml`) zu Ihrem Versionskontrollsystem (z.B. Git) hinzufügen.
     - Beispiel:
```powershell
       git add .idea/misc.xml .idea/modules.xml .idea/compiler.xml .idea/workspace.xml .idea/vcs.xml
       git commit -m "Added IntelliJ IDEA configuration files"
       git push origin main
 ```      
2. **Automatisierte Validierung**:
     - Verwende Skripte oder CI/CD-Pipelines, um die Integrität der Konfigurationsdateien zu überprüfen. Diese Skripte können sicherstellen, dass die Dateien nicht manuell geändert wurden und dass alle erforderlichen Einstellungen vorhanden sind.
	 
### 9. Fehlerbehebung und Support

#### 9.1 Häufige Probleme und Lösungen

##### 9.1.1 Probleme bei der Nutzung von Git

1. **Fehler beim Klonen eines Repositories: `Permission denied (publickey)`**
   - **Ursache:** Der SSH-Schlüssel ist nicht korrekt eingerichtet oder GitHub akzeptiert den verwendeten Schlüssel nicht.
   - **Lösung:** 
     - Überprüfen, ob der SSH-Schlüssel generiert und dem GitHub-Account hinzugefügt wurde:
       ```console
       ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
       cat ~/.ssh/id_rsa.pub
       ```
       - Der Befehl `ssh-keygen` generiert einen neuen SSH-Schlüssel. Der Befehl `cat` zeigt den öffentlichen Schlüssel an, der zu GitHub hinzugefügt werden muss.
     - Öffentlichen Schlüssel zu GitHub hinzufügen unter [SSH Keys](https://github.com/settings/keys).
     - SSH-Verbindung testen:
       ```console
       ssh -T git@github.com
       ```
       - Der Befehl `ssh -T git@github.com` testet die Verbindung zu GitHub unter Verwendung des eingerichteten SSH-Schlüssels.

2. **Fehler beim Pushen: `fatal: unable to access 'https://github.com/USER/REPO.git/': The requested URL returned error: 403`**
   - **Ursache:** Zugriffsrechte auf das Repository sind unzureichend.
   - **Lösung:** 
     - Sicherstellen, dass die erforderlichen Berechtigungen für das Repository vorhanden sind.
     - Git-Konfiguration überprüfen:
       ```console
       git config --global user.name "your_username"
       git config --global user.email "your_email@example.com"
       ```
       - Diese Befehle überprüfen und setzen den Git-Benutzernamen und die E-Mail-Adresse.

3. **Fehler beim Mergen: `CONFLICT (content): Merge conflict in file.txt`**
   - **Ursache:** Änderungen in der gleichen Datei widersprechen sich.
   - **Lösung:** 
     - Die Datei mit Konflikten öffnen und die Konflikte manuell beheben.
     - Änderungen stagen und committen:
       ```console
       git add file.txt
       git commit -m "Resolved merge conflict in file.txt"
       ```
       - Der Befehl `git add` stagt die Datei nach der Behebung der Konflikte, und `git commit` speichert die Änderungen.

4. **Fehler bei der Submodule-Aktualisierung: `fatal: no submodule mapping found in .gitmodules for path 'submodule_path'`**
   - **Ursache:** Die `.gitmodules`-Datei ist nicht korrekt konfiguriert oder wurde gelöscht.
   - **Lösung:** 
     - Die `.gitmodules`-Datei überprüfen und sicherstellen, dass alle Submodule korrekt aufgeführt sind.
     - Submodule initialisieren und aktualisieren:
       ```console
       git submodule init
       git submodule update
       ```
       - Diese Befehle initialisieren die Submodule und aktualisieren sie auf den neuesten Stand.

##### 9.1.2 Probleme bei der Nutzung von IntelliJ IDEA

1. **Problem beim Starten von IntelliJ IDEA: `IDE hangs or crashes`**
   - **Ursache:** Möglicherweise inkompatible Plugins oder fehlerhafte Konfigurationsdateien.
   - **Lösung:** 
     - IntelliJ IDEA im abgesicherten Modus starten:
       ```console
       Help -> Find Action -> Safe Mode
       ```
       - Der abgesicherte Modus deaktiviert Plugins, die möglicherweise die Ursache für das Problem sind.

2. **Problem mit der virtuellen Umgebung: `Python interpreter not configured`**
   - **Ursache:** Die virtuelle Umgebung ist nicht korrekt eingerichtet oder aktiviert.
   - **Lösung:** 
     - Sicherstellen, dass die virtuelle Umgebung korrekt erstellt wurde:
       ```console
       python -m venv venv
       ```
       - Dieser Befehl erstellt eine neue virtuelle Umgebung.
     - Virtuelle Umgebung aktivieren:
       ```console
       venv\Scripts\activate
       ```
       - Dieser Befehl aktiviert die virtuelle Umgebung unter Windows.
     - Python Interpreter in IntelliJ IDEA konfigurieren:
       ```console
       File -> Settings -> Project: <project_name> -> Python Interpreter
       ```
       - Hier wird der Python-Interpreter für das Projekt festgelegt.

3. **Fehlerhafte Projektstruktur: `Cannot resolve symbol`**
   - **Ursache:** Quellverzeichnisse sind nicht korrekt markiert.
   - **Lösung:** 
     - Relevante Verzeichnisse als Quellverzeichnisse markieren:
       ```console
       Rechtsklick auf das Verzeichnis -> Mark Directory as -> Sources Root
       ```
       - Dieser Schritt stellt sicher, dass IntelliJ IDEA die Quellverzeichnisse korrekt erkennt.

4. **Fehlerhafte Git-Integration: `Unable to fetch changes`**
   - **Ursache:** Die Git-Konfiguration in IntelliJ IDEA ist fehlerhaft.
   - **Lösung:** 
     - Git-Einstellungen überprüfen:
       ```console
       File -> Settings -> Version Control -> Git
       ```
       - Sicherstellen, dass der Pfad zur Git-Installation korrekt ist und keine Fehlkonfigurationen vorliegen.

#### 9.2 Probleme bei der Nutzung von IntelliJ IDEA und Terminals

**Problem 1: AuthorizationManager check failed**

- **Ursache:** Das System führt das signierte Skript nicht aus, da der Publisher nicht als vertrauenswürdig eingestuft wird.
- **Lösung:**
  1. **Verifizierung des Zertifikats im vertrauenswürdigen Stammzertifikatspeicher:**
     ```powershell
     Get-ChildItem -Path Cert:\LocalMachine\Root | Where-Object {$_.Subject -eq "CN=MyScriptSigningCert"}
     ```
     - Überprüft, ob das Zertifikat im Stammzertifikatspeicher vorhanden ist.
  2. **Hinzufügen des Zertifikats zu den vertrauenswürdigen Herausgebern:**
     ```powershell
     Import-Certificate -FilePath "C:\Users\<IhrBenutzername>\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
     ```
     - Fügt das Zertifikat zu den vertrauenswürdigen Herausgebern hinzu.
  3. **Überprüfen, ob das Zertifikat für die Code-Signatur geeignet ist:**
     ```powershell
     $cert = Get-ChildItem -Path Cert:\CurrentUser\My\<Thumbprint>
     $cert.Extensions | Format-List
     ```
     - Überprüft die Eignung des Zertifikats für die Code-Signatur.
  4. **Skripte erneut signieren und das Vertrauen bestätigen:**
     ```powershell
     Set-AuthenticodeSignature -FilePath "U:\script.ps1" -Certificate $cert
     ```
     - Signiert das Skript mit dem entsprechenden Zertifikat.
  5. **Aktualisieren der PowerShell-Ausführungsrichtlinie:**
     ```powershell
     Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
     ```
     - Setzt die Ausführungsrichtlinie auf "RemoteSigned", um die Ausführung signierter Skripte zu erlauben.
  6. **Neustart der PowerShell-Sitzung und IntelliJ IDEA:** Dieser Schritt stellt sicher, dass alle Änderungen wirksam werden.

**Problem 2: UnknownError beim Signieren eines Skripts**

- **Ursache:** Das Zertifikat ist möglicherweise nicht richtig konfiguriert oder nicht für die Codesignatur geeignet.
- **Lösung:**
  1. **Erstellen eines Codesignaturzertifikats:**
     ```powershell
     $cert = New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -Subject "CN=MyScriptSigningCert" -KeyUsage DigitalSignature -Type CodeSigningCert
     ```
     - Erstellt ein neues selbstsigniertes Zertifikat für die Codesignatur.
  2. **Exportieren und Importieren des Zertifikats:**
     ```powershell
     Export-Certificate -Cert $cert -FilePath "C:\Users\VX\MyScriptSigningCert.cer"
     Import-Certificate -FilePath "C:\Users\VX\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\Root
     Import-Certificate -FilePath "C:\Users\VX\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
     ```
     - Exportiert und importiert das Zertifikat, um es für die Signatur zu verwenden.
  3. **Signieren des Skripts:**
     ```powershell
     Set-AuthenticodeSignature -FilePath "U:\script.ps1" -Certificate (Get-Item -Path Cert:\CurrentUser\My\<Thumbprint>)
     ```
     - Signiert das Skript mit dem erstellten Zertifikat.

**Problem 3: Fehler bei der Ausführung des Skripts im IntelliJ Terminal**

- **Ursache:** Das Skript wird möglicherweise als "Remote" betrachtet und muss daher signiert sein, um den `AllSigned`-Richtlinien zu entsprechen.
- **Lösung:** Sicherstellen, dass alle Skripte, die im IntelliJ Terminal ausgeführt werden, korrekt signiert sind und die Zertifikate im vertrauenswürdigen Stammzertifikatspeicher und TrustedPublisher-Store importiert sind.

##### 9.2.1 Proxy und Firewall

1. **Problem beim Zugriff auf GitHub hinter einem Proxy: `Could not resolve host: github.com`**
   - **Ursache:** Der Proxy ist nicht korrekt konfiguriert oder blockiert den Zugriff.
   - **Lösung:** 
     - Sicherstellen, dass die Proxy-Einstellungen korrekt sind:
       ```powershell
       git config --global http.proxy http://proxyuser:proxypassword@proxy.server.com:port
       git config --global https.proxy https://proxyuser:proxypassword@proxy.server.com:port
       ```
       - Diese Befehle setzen die HTTP- und HTTPS-Proxy-Einstellungen für Git.
     - DNS-Auflösung überprüfen:
       ```powershell
       nslookup github.com
       ```
       - Dieser Befehl überprüft, ob die DNS-Auflösung für GitHub korrekt funktioniert.
     - Proxy in IntelliJ IDEA konfigurieren:
       ```console
       File -> Settings -> Appearance & Behavior -> System Settings -> HTTP Proxy
       ```
       - Stellt sicher, dass IntelliJ IDEA den Proxy korrekt verwendet.

   - Wenn Probleme beim Zugriff auf externe Ressourcen auftreten, die Proxy-Einstellungen gemäß den Anweisungen in Abschnitt 6, „Proxy-Dienst einrichten“, überprüfen.

##### 9.2.2 Probleme bei der Nutzung von px.exe

**1. Fehler: Proxy-Dienst nicht verfügbar**
   - **Ursache:** px.exe ist möglicherweise nicht gestartet oder der Dienst wurde nicht korrekt installiert.
   - **Lösung:** Überprüfen Sie, ob der Dienst läuft, und starten Sie ihn gegebenenfalls neu:
     ```powershell
     Start-Process -FilePath "C:\Program Files\px-pxy\px.exe"
     ```

**2. Fehler: Zertifikatsfehler bei der Proxy-Nutzung**
   - **Ursache:** Das Unternehmens-Proxy-Zertifikat wurde nicht korrekt in px.exe integriert.
   - **Lösung:** Stellen Sie sicher, dass das Zertifikat korrekt in der `px.ini` konfiguriert ist und lokal importiert wurde:
     ```powershell
     Import-Certificate -FilePath "C:\path\to\corporate-proxy-cert.pem" -CertStoreLocation Cert:\LocalMachine\Root
     ```

**3. Fehler: Keine Verbindung zu GitHub oder IntelliJ**
   - **Ursache:** px.exe könnte nicht korrekt konfiguriert sein oder es gibt Konflikte mit anderen Proxy-Einstellungen.
   - **Lösung:** Stelle sicher, dass keine anderen Proxy-Einstellungen (z.B. in Umgebungsvariablen) px.exe überschreiben. Überprüfe die Konfiguration und führen Sie einen Neustart des Systems durch, um sicherzustellen, dass alle Änderungen übernommen wurden.

     
### 10. Glossar
**Repository (Repo)**
- **Definition:** Ein Speicherort, in dem der gesamte Code, die Historie und die Konfigurationsdateien eines Projekts gespeichert werden.
- **Verwendung im Leitfaden:** Das Data_Suite-Projekt und seine Submodule werden als Repositories auf GitHub gehostet.
- **Besonderheiten:** Repositories ermöglichen die Nachverfolgung aller Änderungen im Code und bieten eine zentrale Quelle für die Zusammenarbeit.
- **Vorteile:** Zentralisierte Speicherung, Versionskontrolle, einfache Zusammenarbeit.

**Submodule**
- **Definition:** Ein Git-Repository, das innerhalb eines anderen Git-Repositorys enthalten ist.
- **Verwendung im Leitfaden:** Submodule wie OCR_Manager_Suite, Template_Center, Text_Anonymizer und html_b2b_form sind Teile des Data_Suite-Projekts.
- **Besonderheiten:** Ermöglichen die Integration und Verwaltung externer Projekte innerhalb eines Hauptprojekts.
- **Vorteile:** Wiederverwendbarkeit von Code, Modularität.
- **Nachteile:** Komplexere Verwaltung und Aktualisierung, potenzielle Synchronisierungsprobleme.

**Branch**
- **Definition:** Eine parallele Version eines Repositories, die unabhängig von der Hauptlinie der Entwicklung geändert werden kann.
- **Verwendung im Leitfaden:** Branches werden genutzt, um neue Features zu entwickeln oder Bugs zu beheben, ohne die stabile Version des Projekts zu beeinflussen.
- **Besonderheiten:** Erlauben es, verschiedene Entwicklungsstränge zu pflegen und später zusammenzuführen.
- **Vorteile:** Isolierte Entwicklung, risikofreie Experimente.
- **Nachteile:** Potenzielle Konflikte beim Zusammenführen (Mergen).
  
**SSH (Secure Shell)**
- **Definition:** SSH (Secure Shell) ist ein Protokoll, das verschlüsselte Kommunikation zwischen Computern ermöglicht und für die sichere Übertragung von Daten sowie die Remote-Verwaltung von Systemen verwendet wird. In der Softwareentwicklung wird SSH häufig für die sichere Authentifizierung und den Zugriff auf entfernte Git-Repositories, wie GitHub, eingesetzt.
- **Relevanz im Projekt:** Im vorliegenden Projekt wird SSH verwendet, um eine sichere Verbindung zwischen der lokalen Entwicklungsumgebung und GitHub herzustellen. Diese Verbindung ist notwendig, um Quellcode aus dem Repository zu klonen, Änderungen zu pushen und neue Branches zu erstellen, ohne dass Passwörter über unsichere Kanäle übertragen werden.
- **Einsatz in der Entwicklungsumgebung:** Die Konfiguration von SSH erfolgt durch die Generierung eines SSH-Schlüsselpaares, das aus einem privaten und einem öffentlichen Schlüssel besteht. Der öffentliche Schlüssel wird in Ihrem GitHub-Konto hinterlegt, während der private Schlüssel lokal gespeichert wird. Dieser Mechanismus stellt sicher, dass nur authentifizierte Benutzer auf das Repository zugreifen können.
- **Integration in die Arbeitsabläufe:** SSH ist direkt in die IDE (z.B. IntelliJ IDEA) integriert, sodass Sie aus der Entwicklungsumgebung heraus nahtlos auf Git-Repositories zugreifen können. Die SSH-Verbindung wird entweder automatisch durch die IDE hergestellt oder kann manuell über die Kommandozeile (z.B. PowerShell oder Git Bash) gestartet werden.

**SSH-Agent**
- **Definition:** Der SSH-Agent ist ein Hintergrundprogramm, das SSH-Schlüssel im Arbeitsspeicher speichert und verwaltet. Es ermöglicht, einmal eingegebene Passphrasen über eine Sitzung hinweg zu speichern, sodass bei nachfolgenden Verbindungen keine erneute Eingabe erforderlich ist.
- **Funktion im Projekt:** In einem Entwicklungsumfeld, insbesondere in einer Enterprise-Umgebung, erleichtert der SSH-Agent die Handhabung von SSH-Verbindungen erheblich. Er übernimmt die Aufgabe, die Passphrase für Ihren SSH-Schlüssel einmalig zu speichern, was repetitive Eingaben vermeidet und die Effizienz steigert. Dies ist besonders nützlich, wenn während einer Entwicklungs- oder Deployment-Sitzung mehrere SSH-Operationen durchgeführt werden.
- **Start und Verwaltung:** Der SSH-Agent wird typischerweise beim Starten der Entwicklungsumgebung oder einer neuen Terminal-Sitzung initialisiert. Entwickler fügen ihren privaten Schlüssel einmalig zum Agenten hinzu, sodass alle nachfolgenden SSH-Verbindungen automatisch authentifiziert werden. In den meisten Unix-basierten Systemen wird der SSH-Agent automatisch mit dem Anmelden an die Shell gestartet; unter Windows kann dies manuell erfolgen, beispielsweise über PowerShell mit dem Befehl `Start-Service ssh-agent`.
- **Best Practices:** Für eine reibungslose Nutzung sollte der SSH-Agent so konfiguriert sein, dass er beim Start des Systems oder der Entwicklungsumgebung automatisch gestartet wird. Dies minimiert Sicherheitsrisiken, da die Passphrase nur einmal pro Sitzung eingegeben werden muss, und reduziert potenzielle Unterbrechungen im Entwicklungsprozess.

**Virtuelle Umgebung (Virtual Environment)**
- **Definition:** Eine virtuelle Umgebung ist ein isolierter Python-Arbeitsbereich, der es ermöglicht, spezifische Versionen von Abhängigkeiten und Paketen für ein Projekt getrennt von anderen Projekten und dem globalen Python-Interpreter zu verwalten. Diese Isolation verhindert, dass Änderungen an einem Projekt unbeabsichtigt andere Projekte oder das System beeinflussen.

- **Relevanz im Projekt:** In einem Projekt wie "Data_Suite", das aus mehreren Submodulen besteht, ist die Verwendung einer virtuellen Umgebung entscheidend. Sie gewährleistet, dass jedes Submodul seine eigenen Abhängigkeiten verwalten kann, ohne dass es zu Konflikten mit anderen Modulen oder globalen Paketen kommt. Dies ist besonders wichtig in Umgebungen, in denen verschiedene Bibliotheken in unterschiedlichen Versionen verwendet werden müssen.

- **Einsatz in der Entwicklungsumgebung:** Im "Data_Suite"-Projekt wird die virtuelle Umgebung mit dem Werkzeug `venv` erstellt. Dadurch können für das Hauptprojekt und die Submodule spezifische Python-Pakete installiert werden, die unabhängig von der globalen Python-Installation sind. Dies fördert Konsistenz und Reproduzierbarkeit im Team, da alle Entwickler mit identischen Abhängigkeiten arbeiten können, ohne dass globale Systemänderungen erforderlich sind.

- **Besonderheiten und Herausforderungen:**
  - **Isolierte Verwaltung von Abhängigkeiten:** Jede virtuelle Umgebung führt ihre eigenen Versionen der benötigten Python-Pakete. Dies minimiert das Risiko von Versionskonflikten und stellt sicher, dass jedes Projekt unter stabilen und vorhersagbaren Bedingungen ausgeführt wird.
  - **Verwaltung von Submodulen:** In Projekten mit mehreren Submodulen kann es herausfordernd sein, Abhängigkeiten zu koordinieren. Es muss entschieden werden, ob für jedes Submodul separate virtuelle Umgebungen eingerichtet werden oder ob alle Module eine gemeinsame Umgebung nutzen. Diese Entscheidung hängt von der Kompatibilität der Abhängigkeiten und der Komplexität des Projekts ab.

- **Vorteile der venv-Nutzung:** Die Verwendung von `venv` ist in einem Enterprise-Umfeld besonders sinnvoll, da sie eine konsistente und reproduzierbare Entwicklungsumgebung sicherstellt. Trotz des zusätzlichen Verwaltungsaufwands überwiegen die Vorteile, insbesondere durch die Vermeidung von Versionskonflikten und die Flexibilität bei der Handhabung von Abhängigkeiten. Für ein komplexes Projekt mit mehreren Submodulen ist die sorgfältige Verwaltung der virtuellen Umgebungen unerlässlich, um eine reibungslose Entwicklung und Integration zu gewährleisten.

- **Best Practices:** Es ist ratsam, für jedes Submodul entweder separate virtuelle Umgebungen zu verwenden oder sicherzustellen, dass alle Submodule kompatible Abhängigkeiten nutzen, die in einer gemeinsamen virtuellen Umgebung verwaltet werden. Regelmäßige Aktualisierung der `requirements.txt`-Dateien und deren Verwaltung im Versionskontrollsystem sind essenziell, um sicherzustellen, dass alle Entwickler mit den gleichen Versionen der Abhängigkeiten arbeiten. Dies unterstützt eine konsistente und problemfreie Entwicklung.

**jinja2**
- **Definition:** Ein modernes und flexibles Templating-System für Python, das es ermöglicht, HTML, XML oder andere Markup-Sprachen im Textformat zu generieren.
- **Verwendung im Leitfaden:** Jinja2 wird verwendet, um dynamische Inhalte in HTML-Dateien für das Data_Suite-Projekt zu erzeugen.
- **Besonderheiten:** Bietet leistungsstarke Template-Erweiterungsmechanismen und Steuerungsstrukturen.
- **Vorteile:** Flexible und wiederverwendbare Templates, einfache Integration in Webanwendungen.
- **Nachteile:** Lernkurve für neue Benutzer, Performance-Overhead bei komplexen Templates.

**HTTP_PROXY**
- **Definition:** Umgebungsvariable, die den HTTP-Proxy-Server spezifiziert, der für HTTP-Anfragen verwendet werden soll.
- **Verwendung im Leitfaden:** HTTP_PROXY wird konfiguriert, um Netzwerkverkehr durch einen Proxy zu leiten, insbesondere in einer Unternehmensumgebung mit Firewall-Beschränkungen.
- **Besonderheiten:** Notwendig für den Zugriff auf das Internet hinter einem Unternehmensproxy.
- **Vorteile:** Ermöglicht die Verbindung zu externen Ressourcen trotz Netzwerkbeschränkungen. 

**pip install <package-name>**
- **Definition:** Ein Befehl des Python-Paketmanagers `pip`, der ein bestimmtes Python-Paket aus dem Python Package Index (PyPI) installiert.
- **Verwendung im Leitfaden:** Dieser Befehl wird verwendet, um die notwendigen Abhängigkeiten für das Data_Suite-Projekt zu installieren.
- **Besonderheiten:** Installiert Pakete und deren Abhängigkeiten in die aktuelle Python-Umgebung.
- **Vorteile:** Einfache Paketverwaltung, Zugriff auf eine große Anzahl von Bibliotheken.
- **Nachteile:** Abhängigkeit von der Verfügbarkeit von Paketen in PyPI, potenzielle Konflikte bei Paketversionen.

**Zulu JDK**
- **Definition:** Eine zertifizierte, zu 100 % offene Version des Java Development Kit (JDK), basierend auf OpenJDK und unterstützt von Azul Systems.
- **Verwendung im Leitfaden:** Zulu JDK wird als Java SDK verwendet, um Java-basierte Teile des Data_Suite-Projekts zu kompilieren und auszuführen.
- **Besonderheiten:** Kompatibel mit allen Java SE-Standards und regelmäßigen Sicherheitsupdates.
- **Vorteile:** Kostenlose Nutzung, kommerzielle Unterstützung verfügbar. 

**Markieren relevanter Verzeichnisse als Root, Test, Resources, etc.**
- **Definition:** Eine Funktion in IntelliJ IDEA, um Verzeichnisse innerhalb eines Projekts als spezifische Quelltypen (z.B. `Sources Root`, `Test Sources Root`, `Resources`) zu kennzeichnen.
- **Verwendung im Leitfaden:** Diese Markierungen helfen IntelliJ IDEA, den Code korrekt zu organisieren und zu verarbeiten, z.B. Testdateien von Produktionscode zu unterscheiden.
- **Besonderheiten:** IntelliJ verwendet diese Markierungen, um den Inhalt zu indizieren und entsprechende Werkzeuge wie den Compiler oder die Laufzeitumgebung korrekt zu konfigurieren.
- **Vorteile:** Verbesserte Projektorganisation, spezifische Werkzeuge für verschiedene Verzeichnistypen.
- **Nachteile:** Falsche Markierungen können zu Fehlern bei der Kompilierung oder Laufzeit führen.

**Unit-Tests**
- **Definition:** Automatisierte Tests, die einzelne Einheiten oder Komponenten einer Software isoliert und unabhängig voneinander testen, um sicherzustellen, dass sie korrekt funktionieren.
- **Verwendung im Leitfaden:** Unit-Tests werden verwendet, um die Funktionalität einzelner Komponenten des Data_Suite-Projekts zu überprüfen und zu validieren.
- **Besonderheiten:** Tests werden typischerweise für Funktionen, Methoden oder Klassen geschrieben und sollen alle möglichen Eingabewerte abdecken.
- **Vorteile:** Frühzeitige Fehlererkennung, verbesserte Codequalität, erleichterte Refaktorisierung.
- **Nachteile:** Erfordert zusätzlichen Aufwand für das Schreiben und Pflegen der Tests, mögliche Verzögerungen durch langsame Testausführung bei großen Testmengen.

### 11. Anhang

#### Zusätzliche Informationen

Dieser Abschnitt bietet weiterführende Informationen und Ressourcen, die für das Verständnis und die erfolgreiche Umsetzung des Data_Suite-Projekts hilfreich sein können. 

**1. Offizielle Dokumentationen und Ressourcen:**

- **Git Dokumentation:** Die offizielle Git-Dokumentation bietet umfassende Informationen zu allen Aspekten von Git, einschließlich Befehlen, Workflows und Best Practices.
  - [Git Documentation](https://git-scm.com/doc)

- **IntelliJ IDEA Dokumentation:** Die offizielle Dokumentation von IntelliJ IDEA bietet Anleitungen zur Installation, Konfiguration und Nutzung der IDE, einschließlich spezieller Funktionen und Plugins.
  - [IntelliJ IDEA Documentation](https://www.jetbrains.com/idea/documentation/)

- **Python Dokumentation:** Die offizielle Python-Dokumentation bietet umfassende Informationen zur Python-Programmiersprache, einschließlich Tutorials, Bibliotheken und Referenzen.
  - [Python Documentation](https://docs.python.org/3/)

**2. Tutorials und Leitfäden:**

- **Atlassian Git Tutorials:** Eine Sammlung von Tutorials, die verschiedene Aspekte von Git erklären, von den Grundlagen bis zu fortgeschrittenen Themen wie Branching und Merging.
  - [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

- **JetBrains Blog:** Der offizielle Blog von JetBrains bietet Artikel, Tipps und Tutorials zu IntelliJ IDEA und anderen JetBrains-Produkten.
  - [JetBrains Blog](https://blog.jetbrains.com/)

- **GitHub Guides:** Eine Sammlung von Anleitungen und Tutorials zu GitHub, die Themen wie das Erstellen und Verwalten von Repositories, das Arbeiten mit Pull Requests und das Verwenden von GitHub Actions abdecken.
  - [GitHub Guides](https://guides.github.com/)

**3. Best Practices und Workflows:**

- **Git Best Practices:** Eine Übersicht über empfohlene Praktiken für die Arbeit mit Git, einschließlich Commit-Nachrichten, Branching-Strategien und Konfliktlösung.
  - [Git Best Practices](https://sethrobertson.github.io/GitBestPractices/)

- **Python Packaging Best Practices:** Eine Anleitung zur besten Vorgehensweise für das Erstellen und Verwalten von Python-Paketen, einschließlich virtueller Umgebungen und Abhängigkeitsverwaltung.
  - [Python Packaging Best Practices](https://packaging.python.org/guides/)

**4. Hilfreiche Tools und Plugins:**

- **GitLens für Visual Studio Code:** Ein beliebtes Plugin für Visual Studio Code, das erweiterte Git-Funktionalitäten bietet, einschließlich Historie, Blame-Ansichten und Commit-Nachverfolgung.
  - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

- **Python Environment Manager (Pyenv):** Ein Tool zum Verwalten mehrerer Python-Versionen und virtueller Umgebungen auf einem System.
  - [Pyenv](https://github.com/pyenv/pyenv)

- **IntelliJ IDEA Plugins:** Eine Sammlung von nützlichen Plugins für IntelliJ IDEA, die die Produktivität steigern und die Arbeit mit verschiedenen Technologien und Sprachen erleichtern.
  - [IntelliJ IDEA Plugins](https://plugins.jetbrains.com/idea)

**5. Sicherheitsressourcen:**

- **OWASP (Open Web Application Security Project):** Eine gemeinnützige Organisation, die sich der Verbesserung der Software-Sicherheit widmet. Ihre Ressourcen sind besonders hilfreich für die Sicherung von Webanwendungen.
  - [OWASP](https://owasp.org/)

- **GitHub Security Best Practices:** Eine Anleitung zu den besten Sicherheitspraktiken auf GitHub, einschließlich der Verwaltung von Zugangsschlüsseln und der Verwendung von Sicherheitsfeatures.
  - [GitHub Security Best Practices](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure)

**6. Community und Support:**

- **Stack Overflow:** Eine der größten Online-Communities für Entwickler, die Hilfe und Antworten zu einer Vielzahl von Programmier- und Technologiefragen bietet.
  - [Stack Overflow](https://stackoverflow.com/)

- **GitHub Community Forum:** Ein Forum, in dem GitHub-Benutzer Fragen stellen und Antworten von der Community und GitHub-Mitarbeitern erhalten können.
  - [GitHub Community Forum](https://github.community/)

- **IntelliJ IDEA Community:** Ein Forum für IntelliJ IDEA-Benutzer, um Fragen zu stellen, Tipps auszutauschen und Hilfe von anderen Benutzern und JetBrains-Mitarbeitern zu erhalten.
  - [IntelliJ IDEA Community](https://intellij-support.jetbrains.com/hc/en-us/community/topics)
 
#### Hilfs- und Prüfungs-Scripts

**1. Konfigurationsprüfung:**

- **IntelliJ System-Check Powershell Script:**  
```powershell
# intelliJ_system_check.ps1
# Beispiele für das Ausführungskommando des PowerShell-Skripts mit einem dynamischen Home-Verzeichnis-Pfad:

# Beispiel 1: Home-Verzeichnis ist `U:\`
# Das Skript wird mit dem Home-Verzeichnis `U:\` ausgeführt.
# Dies wird das `data_suite` Verzeichnis unter `U:\` annehmen.

#.\intelliJ_system_check.ps1 -homeDir "U:\"

# Beispiel 2: Home-Verzeichnis ist `C:\`
# Das Skript wird mit dem Home-Verzeichnis `C:\` ausgeführt.
# Dies wird das `data_suite` Verzeichnis unter `C:\` annehmen.

#.\intelliJ_system_check.ps1 -homeDir "C:\"

# Beispiel 3: Home-Verzeichnis ist `C:\users\test\`
# Das Skript wird mit dem Home-Verzeichnis `C:\users\test\` ausgeführt.
# Dies wird das `data_suite` Verzeichnis unter `C:\users\test\` annehmen.

#.\intelliJ_system_check.ps1 -homeDir "C:\users\test\"

param (
    [string]$homeDir = "U:\"
)

$outputFile = "${homeDir}data_suite\system_check_results.txt"

function Write-Result {
    param ($message)
    $message | Out-File -FilePath $outputFile -Append
    Write-Host $message
}

# Überprüfung der Git-Installation und Konfiguration
Write-Result "Überprüfung der Git-Installation und Konfiguration:"
Write-Result "-------------------------------------------"
Write-Result "Git Version:"
git --version | Out-File -FilePath $outputFile -Append
Write-Result "Git Benutzername:"
git config --global user.name | Out-File -FilePath $outputFile -Append
Write-Result "Git Benutzer E-Mail:"
git config --global user.email | Out-File -FilePath $outputFile -Append

# Überprüfung der Verzeichnisse und bestehenden Git-Repositories
Write-Result "`nÜberprüfung der Verzeichnisse und bestehenden Git-Repositories:"
Write-Result "-------------------------------------------"
if (Test-Path "${homeDir}data_suite") {
    Write-Result "Verzeichnis existiert bereits. Bitte ein anderes Verzeichnis wählen oder das bestehende löschen."
} else {
    Write-Result "Verzeichnis existiert nicht. Fortfahren mit Erstellung."
}
if (Test-Path "${homeDir}data_suite\.git") {
    Write-Result "Ein Git-Repository existiert bereits in diesem Verzeichnis. Bitte löschen oder ein anderes Verzeichnis wählen."
} else {
    Write-Result "Kein Git-Repository gefunden. Fortfahren mit Erstellung."
}

# Überprüfung relevanter Applikationen und Verzeichnisse
Write-Result "`nÜberprüfung relevanter Applikationen und Verzeichnisse:"
Write-Result "-------------------------------------------"
if (Test-Path "${homeDir}data_suite\venv") {
    Write-Result "Das Verzeichnis 'venv' existiert bereits."
} else {
    Write-Result "Das Verzeichnis 'venv' existiert nicht. Es muss erstellt werden."
}

if (Get-Module -ListAvailable -Name chardet) {
    Write-Result "Die 'chardet' Bibliothek ist installiert."
} else {
    Write-Result "Die 'chardet' Bibliothek ist nicht installiert. Bitte installieren."
}

$ocrDir = "${homeDir}data_suite\ocr_enricher\src"
if (Test-Path $ocrDir) {
    Write-Result "Das Verzeichnis '$ocrDir' existiert."
    if (Test-Path "$ocrDir\OCR_Enricher.ps1" -and Test-Path "$ocrDir\pdf_utils.py") {
        Write-Result "Die erforderlichen Dateien im OCR-Manager-Verzeichnis sind vorhanden."
    } else {
        Write-Result "Eine oder mehrere erforderliche Dateien im OCR-Manager-Verzeichnis fehlen."
    }
} else {
    Write-Result "Das Verzeichnis '$ocrDir' existiert nicht."
}

$submodules = @("ocr_enricher", "template_center", "text_anonymizer", "html_b2b_form")
foreach ($module in $submodules) {
    $filePath = "${homeDir}data_suite\$module\requirements.txt"
    if (Test-Path $filePath) {
        Write-Result "Die Datei 'requirements.txt' ist im Submodul '$module' vorhanden."
    } else {
        Write-Result "Die Datei 'requirements.txt' fehlt im Submodul '$module'."
    }
}

$zuluDir = "${homeDir}data_suite\zulu"
if (Test-Path $zuluDir) {
    Write-Result "Das Verzeichnis '$zuluDir' existiert."
} else {
    Write-Result "Das Verzeichnis '$zuluDir' existiert nicht. Das Zulu JDK muss installiert werden."
}

$npmDir = "${homeDir}data_suite\venv\node_modules"
if (Test-Path $npmDir) {
    Write-Result "Die npm-Abhängigkeiten sind in der virtuellen Umgebung installiert."
} else {
    Write-Result "Die npm-Abhängigkeiten sind nicht installiert. Bitte npm-Abhängigkeiten installieren."
}

# Zusätzliche Überprüfungen
Write-Result "`nZusätzliche Systemüberprüfungen:"
Write-Result "-------------------------------------------"

# Überprüfung des Windows-Betriebssystems
Write-Result "Windows-Betriebssystem:"
$osVersion = (Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion").ProductName
Write-Result $osVersion

# Überprüfung der IntelliJ IDEA Installation
Write-Result "IntelliJ IDEA Version:"
$intelliJVersion = Get-ItemProperty "HKLM:\SOFTWARE\JetBrains\IntelliJ IDEA"
Write-Result $intelliJVersion.DisplayName

# Unternehmens-Proxy Zertifikat
Write-Result "Unternehmens-Proxy Zertifikat:"
if (Test-Path "Cert:\LocalMachine\Root\<ProxyCertThumbprint>") {
    Write-Result "Das Unternehmens-Proxy Zertifikat ist installiert."
} else {
    Write-Result "Das Unternehmens-Proxy Zertifikat fehlt."
}

# Überprüfung der SSH-Schlüssel für GitHub
Write-Result "SSH-Schlüssel für GitHub:"
if (Test-Path "$env:USERPROFILE\.ssh\id_rsa.pub") {
    Write-Result "SSH-Schlüssel ist vorhanden."
} else {
    Write-Result "SSH-Schlüssel fehlt."
}

# Überprüfung, ob SSH-Agent läuft
Write-Result "SSH-Agent Status:"
$sshAgentStatus = Get-Service -Name ssh-agent -ErrorAction SilentlyContinue
if ($sshAgentStatus.Status -eq "Running") {
    Write-Result "SSH-Agent ist gestartet."
} else {
    Write-Result "SSH-Agent läuft nicht."
}

# Überprüfung der .gitconfig-Einträge
Write-Result "Überprüfung der .gitconfig-Einträge:"
if (Test-Path "$env:USERPROFILE\.gitconfig") {
    Get-Content "$env:USERPROFILE\.gitconfig" | Out-File -FilePath $outputFile -Append
} else {
    Write-Result ".gitconfig Datei fehlt."
}

# Überprüfung der Konfigurationsdateien im .idea-Verzeichnis
Write-Result "Überprüfung der Konfigurationsdateien im .idea-Verzeichnis:"
$ideaFiles = @("misc.xml", "modules.xml", "workspace.xml")
foreach ($file in $ideaFiles) {
    if (Test-Path "${homeDir}data_suite\.idea\$file") {
        Write-Result "$file ist vorhanden."
    } else {
        Write-Result "$file fehlt."
    }
}

# Netzzugriff überprüfen
Write-Result "Überprüfung des Netzzugriffs:"
$urls = @(
    "https://www.npmjs.com",
    "https://www.azul.com/downloads/#zulu",
    "https://www.github.com",
    "https://webpack.js.org",
    "https://pypi.org/project/pdf-utils",
    "https://pypi.org/project/chardet"
)

foreach ($url in $urls) {
    try {
        $request = Invoke-WebRequest -Uri $url -UseBasicParsing
        if ($request.StatusCode -eq 200) {
            Write-Result "$url ist erreichbar."
        }
    } catch {
        Write-Result "$url ist nicht erreichbar."
    }
}

# DNS-Auflösung für GitHub überprüfen
Write-Result "Überprüfung der DNS-Auflösung für GitHub:"
try {
    [System.Net.Dns]::GetHostAddresses("www.github.com") | Out-Null
    Write-Result "DNS-Auflösung für GitHub erfolgreich."
} catch {
    Write-Result "DNS-Auflösung für GitHub fehlgeschlagen."
}
``` 
#### GIT Workflows
**Typische Anwendungsfälle und Arbeitsabläufe mit Git:**

1. **Branch erstellen und wechseln:**
```powershell
   git branch <branch_name>
   git checkout <branch_name>
```    
Alternativ in einem Schritt:
```powershell
   git checkout -b <branch_name>
```    
2. **Änderungen stagen und committen:**
```powershell
   git add <file>
   git commit -m "Commit message"
```    
3. **Änderungen pushen:**
```powershell
   git push origin <branch_name>
```    
4. **Änderungen vom Remote-Repository pullen:**
```powershell
   git pull origin main
```    
Alternativ mit Rebase:
```powershell
   git pull --rebase origin main
```    
5. **Merge-Konflikte lösen:**
   - Überprüfen der Konfliktdateien und Konflikte manuell lösen.
   - Committen der gelösten Konflikte:
```powershell
     git add <conflict_file>
     git commit -m "Konflikte gelöst"
 ```     
6. **Submodule aktualisieren:**
```powershell
   git submodule update --remote
```    
7. **Verwaltung von Submodulen:**
   **Hinzufügen von Submodulen:**
```powershell
   git submodule add <submodule_url> <path>
```    
**Entfernen von Submodulen:**
   1. Submoduleintrag aus der `.gitmodules`-Datei entfernen.
   2. Submoduleintrag aus `.git/config` entfernen:
```powershell
      git config -f .git/config --remove-section submodule.<path>
```       
   3. Submodulverzeichnis löschen und Eintrag aus dem Index entfernen:
```powershell
      git rm --cached <path>
      rm -rf <path>
 ```      
   4. Änderungen committen:
```powershell
      git commit -m "Removed submodule <name>"
```       
8. **Löschen von Dateien und Verzeichnissen:**
   **Löschen einer Datei:**
```powershell
   git rm <file>
   git commit -m "Deleted file <file>"
   git push origin <branch_name>
```    
**Löschen eines Verzeichnisses:**
```powershell
   git rm -r <directory>
   git commit -m "Deleted directory <directory>"
   git push origin <branch_name>
```    
9. **Rückgängigmachen von Änderungen:**
   **Rückgängigmachen von Änderungen in einer Datei:**
```powershell
   git checkout -- <file>
```    
**Rückgängigmachen eines Commits:**
``` 
   git revert <commit_id>
```    
10. **Anzeigen des Commit-Verlaufs:**
```powershell
    git log --oneline --graph --decorate --all
```     
11. **Überprüfung des Repository-Status:**
```powershell
    git status
 ```    
